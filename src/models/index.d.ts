import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RequestMetaData = {
  readOnlyFields: 'updatedAt';
}

type DepartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BuildingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Note {
  readonly id: string;
  readonly requestID: string;
  readonly content: string;
  readonly createdBy: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Request {
  readonly id: string;
  readonly dateCompleted?: string;
  readonly notes?: (Note | null)[];
  readonly description: string;
  readonly urgency: number;
  readonly room?: string;
  readonly summary: string;
  readonly requestor: string;
  readonly completed: boolean;
  readonly Department?: Department;
  readonly Building?: Building;
  readonly baseType: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Request, RequestMetaData>);
  static copyOf(source: Request, mutator: (draft: MutableModel<Request, RequestMetaData>) => MutableModel<Request, RequestMetaData> | void): Request;
}

export declare class Department {
  readonly id: string;
  readonly name: string;
  readonly manager?: string;
  readonly members?: (string | null)[];
  readonly Requests?: (Request | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class Building {
  readonly id: string;
  readonly name: string;
  readonly leaders?: (string | null)[];
  readonly Requests?: (Request | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Building, BuildingMetaData>);
  static copyOf(source: Building, mutator: (draft: MutableModel<Building, BuildingMetaData>) => MutableModel<Building, BuildingMetaData> | void): Building;
}