var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Wunderlist = function () {
  function Wunderlist(config) {
    classCallCheck(this, Wunderlist);

    this.headers = function () {
      return {
        headers: {
          'X-Access-Token': config.accessToken,
          'X-Client-ID': config.clientId,
          'Content-Type': 'application/json'
        }
      };
    };
    this.endpoint = 'https://a.wunderlist.com/api/v1/';
    this._ = require('underscore');
    this.request = require('request');
  }

  createClass(Wunderlist, [{
    key: 'paths',
    value: function paths(path) {
      var options = this._.extend(path, this.headers());
      return this.promise(options);
    }
  }, {
    key: 'promise',
    value: function promise(options) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.request(options, function (err, response, body) {
          if (err) {
            reject(err);
          }

          if (response) {
            resolve(response);
          }
        });
      });
    }
  }, {
    key: 'getLists',
    value: function getLists() {
      var url = {
        url: this.endpoint + 'lists',
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'getList',
    value: function getList(listId) {
      var url = {
        url: this.endpoint + 'lists/' + listId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'createList',
    value: function createList(title) {
      var url = {
        url: this.endpoint + 'lists',
        method: 'POST',
        json: {
          "title": title
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'updateList',
    value: function updateList(listId, revision, title) {
      var url = {
        url: this.endpoint + 'lists/' + listId,
        method: 'PATCH',
        json: {
          "revision": revision,
          "title": title
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'stateList',
    value: function stateList(listId, revision, statePublic) {
      var url = {
        url: this.endpoint + 'lists/' + listId,
        method: 'PATCH',
        json: {
          "revision": revision,
          "public": statePublic
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'deleteList',
    value: function deleteList(listId, revision) {
      var url = {
        url: this.endpoint + 'lists/' + listId + '?revision=' + revision,
        method: 'DELETE'
      };

      return this.paths(url);
    }
  }, {
    key: 'listUsers',
    value: function listUsers() {
      var url = {
        url: this.endpoint + 'users',
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'getTasks',
    value: function getTasks(id) {
      var url = {
        url: this.endpoint + 'tasks?list_id=' + id,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'getTasksForState',
    value: function getTasksForState(id, state) {
      var url = {
        url: this.endpoint + 'tasks?list_id=' + id + '&completed=' + state,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'getTask',
    value: function getTask(id) {
      var url = {
        url: this.endpoint + 'tasks/' + id,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'createTask',
    value: function createTask(listId, title, state, starred) {
      var url = {
        url: this.endpoint + 'tasks',
        method: 'POST',
        json: {
          "list_id": listId,
          "title": title,
          "completed": state,
          "starred": starred
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(id, revision) {
      var url = {
        url: this.endpoint + 'tasks/' + id + '?revision=' + revision,
        method: 'DELETE'
      };

      return this.paths(url);
    }
  }, {
    key: 'user',
    value: function user() {
      var url = {
        url: this.endpoint + 'user',
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'avatar',
    value: function avatar(userId, size, fallback) {
      var key = {
        headers: {
          'Content-Type': 'image/png'
        }
      };

      var url = {
        url: this.endpoint + 'avatar?user_id=' + user_id + '&size=' + size + '&fallback=' + fallback,
        method: 'GET'
      };

      var options = this._.extend(url, key);

      return this.promise(options);
    }
  }, {
    key: 'getMembership',
    value: function getMembership() {
      var url = {
        url: this.endpoint + 'memberships',
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'addMember',
    value: function addMember(userId, listId, muted) {
      var url = {
        url: this.endpoint + 'memberships',
        method: 'POST',
        json: {
          "list_id": listId,
          "user_id": userId,
          "muted": muted
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'removeMember',
    value: function removeMember(userId, muted) {
      var url = {
        url: this.endpoint + 'memberships/' + userId,
        method: 'DELETE',
        json: {
          "revision": revision
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'commentsList',
    value: function commentsList(listId) {
      var url = {
        url: this.endpoint + 'task_comments?list_id=' + listId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'commentsTask',
    value: function commentsTask(taskId) {
      var url = {
        url: this.endpoint + 'task_comments?task_id=' + taskId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'createComment',
    value: function createComment(taskId, text) {
      var url = {
        url: this.endpoint + 'task_comments',
        method: 'POST',
        json: {
          "task_id": taskId,
          "text": text
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'subtaskList',
    value: function subtaskList(listId) {
      var url = {
        url: this.endpoint + 'subtasks?list_id=' + list_id,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'subtaskComment',
    value: function subtaskComment(taskId) {
      var url = {
        url: this.endpoint + 'subtasks?task_id=' + taskId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'subtaskListState',
    value: function subtaskListState(listId, completed) {
      var url = {
        url: this.endpoint + 'subtasks?list_id=' + listId + '&completed=' + completed,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'subtaskCommentState',
    value: function subtaskCommentState(taskId, completed) {
      var url = {
        url: this.endpoint + 'subtasks?list_id=' + taskId + '&completed=' + completed,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'createSubstask',
    value: function createSubstask(taskId, title, completed) {
      var url = {
        url: this.endpoint + 'subtasks',
        method: 'POST',
        json: {
          "task_id": taskId,
          "title": title,
          "completed": completed
        }
      };

      return this.paths(url);
    }
  }, {
    key: 'deleteSubtask',
    value: function deleteSubtask(subtaskId, revision) {
      var url = {
        url: this.endpoint + 'subtasks/' + subtaskId + '?revision=' + revision,
        method: 'DELETE'
      };

      return this.paths(url);
    }
  }, {
    key: 'notesList',
    value: function notesList(listId) {
      var url = {
        url: this.endpoint + 'notes?list_id=' + listId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'notesTask',
    value: function notesTask(taskId) {
      var url = {
        url: this.endpoint + 'notes?task_id=' + taskId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'createNote',
    value: function createNote(taskId, content) {
      var url = {
        url: this.endpoint + 'notes?task_id=' + taskId,
        method: 'GET'
      };

      return this.paths(url);
    }
  }, {
    key: 'deleteNote',
    value: function deleteNote(noteId, revision) {
      var url = {
        url: this.endpoint + 'notes/' + noteId + '?revision=' + revision,
        method: 'DELETE'
      };

      return this.paths(url);
    }
  }]);
  return Wunderlist;
}();

export default Wunderlist;