/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      requestID
      content
      createdBy
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        requestID
        content
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      notes {
        items {
          id
          requestID
          content
          createdBy
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Building {
        id
        name
        leaders
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
      Department {
        id
        name
        manager
        members
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRequests = /* GraphQL */ `
  query SyncRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        notes {
          nextToken
          startedAt
        }
        Building {
          id
          name
          leaders
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Department {
          id
          name
          manager
          members
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getBuilding = /* GraphQL */ `
  query GetBuilding($id: ID!) {
    getBuilding(id: $id) {
      id
      name
      leaders
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBuildings = /* GraphQL */ `
  query SyncBuildings(
    $filter: ModelBuildingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuildings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        leaders
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDepartments = /* GraphQL */ `
  query SyncDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        manager
        members
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Requests {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
