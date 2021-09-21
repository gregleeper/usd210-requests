/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      requestID
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
export const onCreateBuilding = /* GraphQL */ `
  subscription OnCreateBuilding {
    onCreateBuilding {
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
export const onUpdateBuilding = /* GraphQL */ `
  subscription OnUpdateBuilding {
    onUpdateBuilding {
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
export const onDeleteBuilding = /* GraphQL */ `
  subscription OnDeleteBuilding {
    onDeleteBuilding {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
