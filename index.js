/*
 * Wunderlist-api v0.1.0
 * https://github.com/felipesousa/wunderlist-api
 *
 * MIT license @ 2016 Felipe Sousa
 * https://github.com/felipesousa/wunderlist-api/blob/master/LICENSE
 *
 * Date: 2016-16-03
 * Last Modified: 2016-07-03
 */

const request  = require('request');
const _        = require('underscore');
let   keys     = {};

module.exports = {

  authentication: (accessToken, clientId) => {
    return keys = {
      headers: {
        'X-Access-Token': accessToken,
        'X-Client-ID': clientId,
        'Content-Type': 'application/json'
      }
    }
  },


  getLists: () => {
    let url = {
      url: 'https://a.wunderlist.com/api/v1/lists',
      method: 'GET'
    }

    const options = _.extend(url, keys);
    console.log(options)
    console.log('-------------------------------')
    console.log('-------------------------------')
    console.log('-------------------------------')
    console.log('-------------------------------')
    console.log('-------------------------------')
    console.log('-------------------------------')
    

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  getList: (list_id) => {
    let url = {
      url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  createList: (title) => {
    let data = {
      url: 'https://a.wunderlist.com/api/v1/lists',
      method: 'POST',
      json: {
        "title": title
      }
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  updateList: (list_id, revision, title) => {
    if (!_.isNumber(arguments[1])) {
      throw new Error('Argument REVISION require type Number.');
    }

    let data = {
      url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
      method: 'PATCH',
      json: {
        "revision": revision,
        "title": title
      }
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  stateList: (list_id, revision, public) => {
    if (!_.isNumber(arguments[1])) {
      throw new Error('Argument REVISION require type Number.');
    }

    let data = {
      url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
      method: 'PATCH',
      json: {
        "revision": revision,
        "public": public
      }
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  deleteList: (list_id, revision) => {
    if (!_.isNumber(arguments[1])) {
      throw new Error('Argument REVISION require type Number.');
    }

    let data = {
      url: 'https://a.wunderlist.com/api/v1/lists/' + list_id + '?revision=' + revision,
      method: 'DELETE'
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  listUsers: (list_id) => {
    let data = {
      url: 'https://a.wunderlist.com/api/v1/users',
      method: 'GET'
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  getTasks: (id) => {
    let url = {
      url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  getTasksForState: (id, state) => {
    let url = {
      url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + id + '&completed=' + state,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  getTask: (id) => {

    let url = {
      url: 'https://a.wunderlist.com/api/v1/tasks/' + id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  createTask: (list_id, title, state, starred) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/tasks',
      method: 'POST',
      json: {
        "list_id": list_id,
        "title": title,
        "completed": state,
        "starred": starred
      }
    }

    const options = _.extend(url, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  deleteTask: (id, revision) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/tasks/' + id + '?revision=' + revision,
      method: 'DELETE'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  user: () => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/user',
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  avatar: (user_id, size, fallback) => {

    var key = {
      headers: {
        'Content-Type': 'image/png'
      }
    }

    let url = {
      url:  'https://a.wunderlist.com/api/v1/avatar?user_id=' + user_id + '&size=' + size + '&fallback=' + fallback,
      method: 'GET'
    }

    const options = _.extend(url, key);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  getMembership: () => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/memberships',
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  addMember: (user_id, list_id, muted) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/memberships',
      method: 'POST',
      json: {
        "list_id": list_id,
        "user_id": user_id,
        "muted": muted
      }
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  removeMember: (user_id, revision) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/memberships/' + user_id,
      method: 'DELETE',
      json: {
        "revision": revision,

      }
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  commentsList: (list_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/task_comments?list_id=' + list_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  commentsTask: (task_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/task_comments?task_id=' + task_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  createComment: (task_id, text) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/task_comments',
      method: 'POST',
      json: {
        "task_id": task_id,
        "text": text
      }
    }

    const options = _.extend(url, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  subtaskList: (list_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/subtasks?list_id=' + list_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  subtaskComment: (task_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/subtasks?task_id=' + task_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  subtaskListState: (list_id, completed) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/subtasks?list_id=' + list_id + '&completed=' + completed,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  subtaskCommentState: (task_id, completed) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/subtasks?task_id=' + task_id + '&completed=' + completed,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },


  createSubstask: (task_id, title, completed) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/subtasks',
      method: 'POST',
      json: {
        "task_id": task_id,
        "title": title,
        "completed": completed
      }
    }

    const options = _.extend(url, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },


  deleteSubtask: (subtask_id, revision) => {

    if (!_.isNumber(arguments[1])) {
      throw new Error('Argument REVISION require type Number.');
    }

    let data = {
      url: 'https://a.wunderlist.com/api/v1/subtasks/' + subtask_id + '?revision=' + revision,
      method: 'DELETE'
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  notesList: (list_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/notes?list_id=' + list_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  notesTask: (task_id) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/notes?task_id=' + task_id,
      method: 'GET'
    }

    const options = _.extend(url, keys);
    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },

  createNote: (task_id, content) => {

    let url = {
      url:  'https://a.wunderlist.com/api/v1/notes',
      method: 'POST',
      json: {
        "task_id": task_id,
        "content": content
      }
    }

    const options = _.extend(url, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  },


  deleteNote: (note_id, revision) => {
    let data = {
      url: 'https://a.wunderlist.com/api/v1/notes/' + note_id + '?revision=' + revision,
      method: 'DELETE'
    }

    const options = _.extend(data, keys);

    return new Promise( (resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        if (response) {
          resolve(response);
        }
      });
    });
  }
}
