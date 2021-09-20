const aws = require("aws-sdk");

aws.config.update({ reqgion: "us-east-1" });
const dynamoDB = new aws.DynamoDB({ apiVersion: "2012-08-10" });
const ses = new aws.SES();

async function queryBuilding(buildingID) {
  let params = {
    Key: {
      id: {
        S: buildingID,
      },
    },
    TableName: "Building-iqcwrzjekzdivnljbqti6wr6ly-staging",
  };

  let building = await dynamoDB.getItem(params).promise();

  return building;
}

async function queryDepartment(departmentID) {
  let params = {
    Key: {
      id: {
        S: departmentID,
      },
    },
    TableName: "Department-iqcwrzjekzdivnljbqti6wr6ly-staging",
  };

  let department = await dynamoDB.getItem(params).promise();

  return department;
}

exports.handler = (event, context, callback) => {
  // eslint-disable-line

  event.Records.forEach(async (record) => {
    // console.log(record.eventID);
    console.log(JSON.stringify(record, null, 2));
    console.log("DynamoDB Record: %j", record.dynamodb);
    if (record.eventName === "REMOVE") {
      return;
    }
    const buildingID =
      record.dynamodb.NewImage.buildingID.S ||
      record.dynamodb.OldImage.buildingID.S;
    const departmentID =
      record.dynamodb.NewImage.departmentID.S ||
      record.dynamodb.OldImage.departmentID.S;
    let building = await queryBuilding(buildingID);
    let department = await queryDepartment(departmentID);

    if (record.eventName === "INSERT") {
      await ses.sendEmail(
        {
          Destination: {
            ToAddresses: ["greg.leeper@usd210.org"],
          },
          Source: "greg.leeper@usd210.org",
          Message: {
            Subject: {
              Data: `New request created`,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: `A new request has been created for ${building.Item.name.S} in the ${department.Item.name.S} department. The request reads as follows: 
                  Summary: ${record.dynamodb.NewImage.summary.S}
                  Description: ${record.dynamodb.NewImage.description.S}
                  Urgency: ${record.dynamodb.NewImage.urgency.N}

                  Check out the requst here: http://localhost:3000/request/${record.dynamodb.Keys.id.S}
                `,
                Charset: "UTF-8",
              },
              Html: {
                Data: `<html> 
                  <head></head>
               <body> <p>A new request has been <u>created</u> for <strong>${building.Item.name.S}</strong> in the <strong>${department.Item.name.S}</strong> department. The request reads as follows: </p>
                  <p>Summary: ${record.dynamodb.NewImage.summary.S}</p>
                  <p>Description: ${record.dynamodb.NewImage.description.S}</p>
                  <p>Urgency: ${record.dynamodb.NewImage.urgency.N}</p>

                  <p>Check out the requst here: http://localhost:3000/request/${record.dynamodb.Keys.id.S} </p>
                  </body></html>`,
                Charset: "UTF-8",
              },
            },
          },
        },
        function (err, data) {
          if (err) {
            console.log(err.message);
          } else {
            console.log("email sent", data.MessageId);
          }
        }
      );
    }
    if (record.eventName === "MODIFY") {
      await ses.sendEmail(
        {
          Destination: {
            ToAddresses: ["greg.leeper@usd210.org"],
          },
          Source: "greg.leeper@usd210.org",
          Message: {
            Subject: {
              Data: `Request Updated`,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: `A  request has been updated for ${building.Item.name.S} in the ${department.Item.name.S} department. The request reads as follows: 
                  Summary: ${record.dynamodb.NewImage.summary.S}
                  Description: ${record.dynamodb.NewImage.description.S}
                  Urgency: ${record.dynamodb.NewImage.urgency.N}
                  Status: ${record.dynamodb.NewImage.completed.BOOL}
                  Check out the requst here: http://localhost:3000/request/${record.dynamodb.Keys.id.S}
                `,
                Charset: "UTF-8",
              },
              Html: {
                Data: `<html> 
                  <head></head>
               <body> <p> A request has been <u>updated</u> for <strong>${
                 building.Item.name.S
               }</strong> in the <strong>${
                  department.Item.name.S
                }</strong> department. The request reads as follows: </p>
                  <p>Summary: ${record.dynamodb.NewImage.summary.S}</p>
                  <p>Description: ${record.dynamodb.NewImage.description.S}</p>
                  <p>Urgency: ${record.dynamodb.NewImage.urgency.N}</p>
                  <p>Status: ${
                    record.dynamodb.NewImage.completed.BOOL
                      ? `<strong>Completed</strong>`
                      : `<strong>Open</strong>`
                  }</p>
                  <p>Check out the requst here: http://localhost:3000/request/${
                    record.dynamodb.Keys.id.S
                  } </p>
                  </body></html>`,
                Charset: "UTF-8",
              },
            },
          },
        },
        function (err, data) {
          if (err) {
            console.log(err.message);
          } else {
            console.log("email sent", data.MessageId);
          }
        }
      );
    }
  });
};
