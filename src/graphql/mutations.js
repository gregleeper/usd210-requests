/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      dateCompleted
      notes {
        items {
          id
          requestID
          content
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      urgency
      room
      summary
      requestor
      completed
      Department {
        id
        name
        manager
        members
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      Building {
        id
        name
        leaders
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      buildingID
      departmentID
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      dateCompleted
      notes {
        items {
          id
          requestID
          content
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      urgency
      room
      summary
      requestor
      completed
      Department {
        id
        name
        manager
        members
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      Building {
        id
        name
        leaders
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      buildingID
      departmentID
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      dateCompleted
      notes {
        items {
          id
          requestID
          content
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      urgency
      room
      summary
      requestor
      completed
      Department {
        id
        name
        manager
        members
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      Building {
        id
        name
        leaders
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      buildingID
      departmentID
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const createBuilding = /* GraphQL */ `
  mutation CreateBuilding(
    $input: CreateBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    createBuilding(input: $input, condition: $condition) {
      id
      name
      leaders
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBuilding = /* GraphQL */ `
  mutation UpdateBuilding(
    $input: UpdateBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    updateBuilding(input: $input, condition: $condition) {
      id
      name
      leaders
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBuilding = /* GraphQL */ `
  mutation DeleteBuilding(
    $input: DeleteBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    deleteBuilding(input: $input, condition: $condition) {
      id
      name
      leaders
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      manager
      members
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      manager
      members
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      manager
      members
      Requests {
        items {
          id
          dateCompleted
          description
          urgency
          room
          summary
          requestor
          completed
          buildingID
          departmentID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
