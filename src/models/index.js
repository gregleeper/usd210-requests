// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Request, Department, Building } = initSchema(schema);

export {
  Note,
  Request,
  Department,
  Building
};