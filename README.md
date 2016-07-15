# Wunderlist-api
> :closed_book: Wunderlist in a simple way.

## Installation
`[sudo] npm install --save-dev wunderlist-api`

## Changelog

- **0.2.2** - The names of some methods have changed from version **0.2.x**, please see the new names from the need.

## Docs
  - [Authorization](#authorization)
  - [User](#user)
    - [User Informations](#user-information)
    - [Avatar´s](#avatar)
  - [Lists](#lists)
    - [Get all lists](#get-all-lists)
    - [Get specified list](#get-specified-list)
    - [Make a list from state (public or private)](##make-a-list-from-state-public-or-private)
    - [Create list](#create-list)
    - [Update list](#update-list)
    - [Delete list](#delete-list)
    - [Users authorized in list](#users-authorized-in-list)
  - [Notes](#notes)
    - [Get note from list](##get-notes-from-list)
    - [Get note from task](#get-notes-from-task)
    - [Create Note](#create-note)
    - [Delete Note](#delete-note)
  - [Tasks](#tasks)
    - [Get all tasks](#get-all-tasks)
    - [Get task for state](#get-tasks-for-state)
    - [Get specified task](#get-specified-task)
    - [Create task](#create-task)
    - [Delete task](#delete-task)
  - [Subtasks](#subtasks)
    - [Get subtask from list](#get-subtask-from-list)
    - [Get completed subtasks from list](#get-completed-subtasks-from-list)
    - [Get subtask from task](#get-subtask-from-task)
    - [Get completed subtask from task](#get-completed-subtask-from-task)
    - [Create subtask](#create-subtask)
    - [Delete subtask](#delete-subtask)
  - [Task Comments](#task-comments)
    - [Get comments from Task](#get-comments-from-task)
    - [Get comments from Lists](#get-comments-from-lists)
    - [Create Comment](#create-comment)
  - [Membership](#membership)
    - [Get Membership](#get-membership)
    - [Add member to list](#add-member-to-list)
    - [Remove a Member from a List](#remove-a-member-from-a-list)


## Concepts

There are some parameters that are needed to operate certain methods, among all, some are rather odd, such as the `revision`, that is the amount of change that this task note, user, list, comment, subtask, in short, anything was modified, by default, it comes with the value `1`. When required this parameter, you must enter the value of the `current revision` and not the following number. For example, to delete a user from the list that was newly created, I pass the current value of revision in case the value `1`.
For more information on types of parameters or any other matter, please visit the [official site Wunderlist](https://developer.wunderlist.com/documentation).


## Usage

#### Authorization
  To access the information have 2 data, the first the access token and the Client ID, this information is [available here.](https://developer.wunderlist.com/apps)

  - accessToken - string
  - clientID - string

  ```javascript
  const wunderlist = require('wunderlist-api');

  wunderlist.authentication(accessToken, clientID);
  // => authenticated
  ```

> All the following methods may be accessed in the same way, only changing the parameter when it becomes necessary, show only an example that can be repeated after any other. The method is based on the concept of [promises](https://spring.io/understanding/javascript-promises).

Universal Exampler: *for all methods is REQUIRED use `.then()`  for get response!*

```javascript
const wunderlist = require('wunderlist-api');
wunderlist.method(parameters)
  .then( response => {
    // response
  })
  .catch( error => {
    // handle error
  });
```


#### User

##### User information

```javascript
wunderlist.user()
```

##### Avatar
- user_id: integer
- size: integer (optional)
- fallback: boolean (optional)

```javascript
wunderlist.avatar(user_id, size, fallback)
```

#### Lists

##### Get All lists
```javascript
wunderlist.getLists()
```

##### Get specified list
- list_id: integer

```javascript
wunderlist.getList(list_id)
```

##### Make a list from state (public or private)
- list_id: integer
- revision: integer
- public: boolean

```javascript
wunderlist.avatar(list_id, revision, public)
```

##### Create List
- title: string

```javascript
wunderlist.createList(title)
```

##### Update List
- list_id: integer
- revision: integer
- title: string

```javascript
wunderlist.updateList(list_id, revision, title)
```

##### Delete List
- list_id: integer
- revision: integer

```javascript
wunderlist.deleteList(list_id, revision)
```

##### Users authorized in list
- list_id: integer

```javascript
wunderlist.listUsers(list_id)
```

#### Notes

##### Get notes from list
- list_id: integer

```javascript
wunderlist.notesList(list_id)
```

##### Get notes from task
- task_id: integer

```javascript
wunderlist.notesTask(task_id)
```

##### Create note
- task_id: integer
- content: string

```javascript
wunderlist.createNote(task_id, content)
```

##### Delete note
- note_id: integer
- revision: integer

```javascript
wunderlist.deleteNote(note_id, revision)
```

#### Tasks

##### Get all tasks
- list_id: integer

```javascript
wunderlist.getTasks(list_id)
```

##### Get tasks for state
- list_id: integer
- state: boolean (completed or incompleted)

```javascript
wunderlist.getTasksForState(list_id, state)
```

##### Get specified task
- task_id: integer

```javascript
wunderlist.getTask(task_id)
```

##### Create task
- list_id: integer
- title: string
- state: boolean
- starred: boolean

```javascript
wunderlist.createTask(list_id, title, state, starred)
```

##### Delete Task
- task_id: integer
- revision: integer

```javascript
wunderlist.deleteTask(task_id, revision)
```

#### Subtasks

##### Get subtask from list
- task_id: integer

```javascript
wunderlist.subtaskList(task_id)
```

##### Get completed subtasks from list
- list_id: integer
- completed: boolean

```javascript
wunderlist.subtaskListState(list_id, completed)
```

##### Get subtask from task
- task_id: integer

```javascript
wunderlist.subtaskComment(task_id)
```

##### Get completed subtask from task

- task_id: integer
- completed: boolean

```javascript
wunderlist.subtaskCommentState(task_id, completed)
```

##### Create subtask
- task_id: integer
- title: string
- completed: boolean

```javascript
wunderlist.createSubstask(task_id, title, completed)
```

##### Delete subtask
- subtask_id: integer
- revision: integer

```javascript
wunderlist.deleteSubtask(subtask_id, revision)
```


#### Task Comments

##### Get comments from Task
- task_id: integer

```javascript
wunderlist.commentsTaks(task_id)
```

##### Get comments from Lists
- list_id: integer

```javascript
wunderlist.commentsList(list_id)
```

##### Create Comment
- task_id: integer
- text: string

```javascript
wunderlist.createComment(task_id, text)
```

#### Membership

##### Get Membership

```javascript
wunderlist.getMembership()
```

##### Add member to list
- user_id: integer
- list_id: string
- muted: boolean

```javascript
wunderlist.addMember(user_id, list_id, muted)
```

##### Remove a Member from a List
- user_id: integer
- revision: integer

```javascript
wunderlist.removeMember(user_id, revision)
```

## Contributing
- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am "Add some feature"`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

For more information on types of parameters or any other matter, please visit the [official site Wunderlist](https://developer.wunderlist.com/documentation).

[License MIT](https://github.com/felipesousa/wunderlist-api/blob/master/LICENSE) @ 2016 Felipe Sousa
