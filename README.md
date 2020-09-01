# Deprecated

## Why are the production/dev id's displayed publicly?
As of August 2020, the project is no longer being developed/maintained.

# Installation

- npm install
- npm start

# Git-conventions

branches:

- master: update only for deployment (merge from dev)
- dev: development branches, update continously
- feat/feature-name: a branch that creates/improves a new feature into dev
- design/area-name: a branch that creates/improves GUI/UX into dev
- fix/bug-name: a branch that fix a bug for dev

Pull request:

- At least two collaborators have to approve a pull request before it is merged in to dev-branch
- Always use "Squash and merge" as merge-options

# Technologies

GUI is developed with ReactJS using functional components and hooks. Redux is used for state management and TypeScript is used for the entire application.

Styling is done with styled-components.

# Resources

[Subject](#subject)

[Exercise](#exercise)

# <a name="subject"></a>Subject

## Fetch all subjects

Get list of all subjects. Every subject has a field 'favorite' that communicates that a subject has been favorited by the client

```
GET /subjects
```

#### Headers:

- Client-Id: (Optional) To authenticate user

#### Success response:

```json
200 OK
[
  {
    "id": 1,
    "name": "Learn about Barack Obama",
    "code": "TDT4242",
    "description": "Just Barack Obama",
    "color": "3ea12c",
    "published": "yes",
    "favorite": false
  }
]
```

## Fetch subject

```
GET /subjects/{subjectId}
```

#### Headers:

- Client-Id: (Optional) To authenticate user

Success response:

```json
200 OK
{
  "id": 1,
  "name": "Learn about Barack Obama",
  "code": "TDT4242",
  "description": "Just Barack Obama",
  "color": "3ea12c",
  "published": "yes",
  "collections": []
}
```

## Add subject to favorites

```
PUT /subjects/{subjectId}
```

#### Required headers:

- Client-Id: (Required) To authenticate user

#### Data

```json
{
  "favorite": true / false
}
```

#### Success response:

```json
204 No content
```

# <a name="exercise"></a>Exercise

## Answer exercise

```
PUT /exercises/{exerciseId}
```

#### Required headers:

- Client-Id: (Required) To authenticate user

#### Data

```json
{
  "answer_status": true
}
```

Success response:

```json
204 No content
```

## Report exercise

```
POST /exercises/{exerciseId}/reports
```

#### Data

```json
{
  "message": "String",
  "device": "String",
  "email": "Optional String"
}
```

#### Success response:

```json
201 Created
```
