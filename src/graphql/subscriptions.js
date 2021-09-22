/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
export const onCreateBuilding = /* GraphQL */ `
  subscription OnCreateBuilding {
    onCreateBuilding {
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
export const onUpdateBuilding = /* GraphQL */ `
  subscription OnUpdateBuilding {
    onUpdateBuilding {
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
export const onDeleteBuilding = /* GraphQL */ `
  subscription OnDeleteBuilding {
    onDeleteBuilding {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
