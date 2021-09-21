/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
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
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateCompleted
        notes {
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
          createdAt
          updatedAt
        }
        Building {
          id
          name
          leaders
          createdAt
          updatedAt
        }
        buildingID
        departmentID
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuilding = /* GraphQL */ `
  query GetBuilding($id: ID!) {
    getBuilding(id: $id) {
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
export const listBuildings = /* GraphQL */ `
  query ListBuildings(
    $filter: ModelBuildingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        leaders
        Requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const requestsByBuilding = /* GraphQL */ `
  query RequestsByBuilding(
    $buildingID: ID
    $urgencyCreatedAt: ModelRequestByBuildingCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByBuilding(
      buildingID: $buildingID
      urgencyCreatedAt: $urgencyCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCompleted
        notes {
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
          createdAt
          updatedAt
        }
        Building {
          id
          name
          leaders
          createdAt
          updatedAt
        }
        buildingID
        departmentID
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const requestsByUrgency = /* GraphQL */ `
  query RequestsByUrgency(
    $baseType: String
    $urgencyCreatedAt: ModelRequestByUrgencyCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByUrgency(
      baseType: $baseType
      urgencyCreatedAt: $urgencyCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCompleted
        notes {
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
          createdAt
          updatedAt
        }
        Building {
          id
          name
          leaders
          createdAt
          updatedAt
        }
        buildingID
        departmentID
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const requestsByRequestor = /* GraphQL */ `
  query RequestsByRequestor(
    $baseType: String
    $requestorCreatedAt: ModelRequestByRequestorCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByRequestor(
      baseType: $baseType
      requestorCreatedAt: $requestorCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCompleted
        notes {
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
          createdAt
          updatedAt
        }
        Building {
          id
          name
          leaders
          createdAt
          updatedAt
        }
        buildingID
        departmentID
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const requestsByDepartment = /* GraphQL */ `
  query RequestsByDepartment(
    $departmentID: ID
    $urgencyCreatedAt: ModelRequestByDepartmentCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByDepartment(
      departmentID: $departmentID
      urgencyCreatedAt: $urgencyCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCompleted
        notes {
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
          createdAt
          updatedAt
        }
        Building {
          id
          name
          leaders
          createdAt
          updatedAt
        }
        buildingID
        departmentID
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
