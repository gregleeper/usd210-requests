export const getDeparmentAndRequests = /*GraphQL*/ `
  query RequestsByDepartment(
    $departmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDepartment(id: $departmentID) {
      id
      name
      manager
      
      
      
    }
    requestsByDepartment(
      departmentID: $departmentID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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

export const getBuildingAndRequests = /*GraphQL*/ `
  query RequestsByBepartment(
    $buildingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBuilding(id: $buildingID) {
      id
      name
      leaders
      
    }
    requestsByBuilding(
      buildingID: $buildingID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      dateCompleted
      notes
      description
      urgency
      room
      summary
      requestor
      completed
      buildingID
      departmentID
      _version

      createdAt
      updatedAt
      Building {
        id
        name
        leaders
        _version
      }
      Department {
        id
        name
        manager
        members
        _version
      }
    }
  }
`;
