/*
 * Wunderlist-api v0.1.0
 * https://github.com/felipesousa/wunderlist-api
 *
 * MIT license @ 2016 Felipe Sousa
 * https://github.com/felipesousa/wunderlist-api/blob/master/LICENSE
 *
 * Date: 2016-03-16
 */

var request = require('request');
var _       = require('underscore');
var keys    = {};
var q       = require('q');

// Headers
exports.authentication = function (accessToken, clientId){

  return keys = {
    headers: {
      'X-Access-Token': accessToken,
      'X-Client-ID': clientId,
      'Content-Type': 'application/json'
    }
  }
}

///////////// LISTS METHODS /////////////


// GET all lists
exports.getLists = function (){
  var deferred = q.defer();
  var url = {
    url: 'https://a.wunderlist.com/api/v1/lists',
    method: 'GET'
  }
  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
};

// GET specified list
exports.getOneList = function (list_id){
  var deferred = q.defer();
  var url = {
    url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

// Create a list
exports.createList = function (title){
  var deferred = q.defer();
  var data = {
    url: 'https://a.wunderlist.com/api/v1/lists',
    method: 'POST',
    json: {
      "title": title
    }
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}

// Update a List
exports.updateList = function (list_id, revision, title){
  var deferred = q.defer();
  if (!_.isNumber(arguments[1])) {
    throw new Error('Argument REVISION require type Number.');
  }

  var data = {
    url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
    method: 'PATCH',
    json: {
      "revision": revision,
      "title": title
    }
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}

// Public state List
exports.stateList = function (list_id, revision, public){
  var deferred = q.defer();
  if (!_.isNumber(arguments[1])) {
    throw new Error('Argument REVISION require type Number.');
  }

  var data = {
    url: 'https://a.wunderlist.com/api/v1/lists/' + list_id,
    method: 'PATCH',
    json: {
      "revision": revision,
      "public": public
    }
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}

exports.deleteList = function (list_id, revision){
  var deferred = q.defer();
  if (!_.isNumber(arguments[1])) {
    throw new Error('Argument REVISION require type Number.');
  }

  var data = {
    url: 'https://a.wunderlist.com/api/v1/lists/' + list_id + '?revision=' + revision,
    method: 'DELETE'
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}

exports.listUsers = function (list_id){
  var deferred = q.defer();
  var data = {
    url: 'https://a.wunderlist.com/api/v1/users',
    method: 'GET'
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}

///////////// END: LIST METHODS /////////////

/////////////// TASK METHODS ////////////////

exports.getAllTasks = function (id){
  var deferred = q.defer();
  var url = {
    url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getTasksForState = function (id, state){
  var deferred = q.defer();
  var url = {
    url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + id + '&completed=' + state,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getOneTask = function (id){
  var deferred = q.defer();
  var url = {
    url: 'https://a.wunderlist.com/api/v1/tasks/' + id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.createTask = function (list_id, title, state, starred){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/tasks',
    method: 'POST',
    json: {
      "list_id": list_id,
      "title": title,
      "completed": state,
      "starred": starred
    }
  }

  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.deleteTask = function (id, revision){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/tasks/' + id + '?revision=' + revision,
    method: 'DELETE',
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

///////////// END: TASK METHODS /////////////

/////////////// USERS METHODS ////////////////

exports.user = function (){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/user',
    method: 'GET',
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}


exports.avatar = function (user_id, size, fallback){

  var  key= {
    headers: {
      'Content-Type': 'image/png'
    }
  }
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/avatar?user_id=' + user_id + '&size=' + size + '&fallback=' + fallback,
    method: 'GET',
  }

  var options = _.extend(url, key);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response.request.href)
    }
  });

  return deferred.promise;
}


///////////// END: USER /////////////

/////////////// MEMBERSHIP ////////////////

exports.getMembership = function (){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/memberships',
    method: 'GET',
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.addMemberToList = function (user_id, list_id, muted){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/memberships',
    method: 'POST',
    json: {
      "list_id": list_id,
      "user_id": user_id,
      "muted": muted
    }
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.removeMember = function (user_id, revision){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/memberships/' + user_id,
    method: 'DELETE',
    json: {
      "revision": revision,

    }
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}



///////////// END: MEMBERSHIP /////////////

/////////////// TASKCOMMENTS ////////////////

exports.getCommentsList = function (list_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/task_comments?list_id=' + list_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getCommentsTask = function (task_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/task_comments?task_id=' + task_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}



exports.createComment = function (task_id, text){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/task_comments',
    method: 'POST',
    json: {
      "task_id": task_id,
      "text": text
    }
  }

  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

///////////// END: TASKCOMMENTS /////////////

/////////////// SUBTASKS ////////////////

exports.getSubtaskFromList = function (list_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/subtasks?list_id=' + list_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getSubtaskFromTask = function (task_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/subtasks?task_id=' + task_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getSubtaskCompletedFromList = function (list_id, completed){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/subtasks?list_id=' + list_id + '&completed=' + completed,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getSubtaskCompletedFromTask = function (task_id, completed){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/subtasks?task_id=' + task_id + '&completed=' + completed,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}


exports.createSubstask = function (task_id, title, completed){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/subtasks',
    method: 'POST',
    json: {
      "task_id": task_id,
      "title": title,
      "completed": completed
    }
  }

  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}


exports.deleteSubtask = function (subtask_id, revision){
  var deferred = q.defer();
  if (!_.isNumber(arguments[1])) {
    throw new Error('Argument REVISION require type Number.');
  }

  var data = {
    url: 'https://a.wunderlist.com/api/v1/subtasks/' + subtask_id + '?revision=' + revision,
    method: 'DELETE'
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}



///////////// END: SUBTASKS /////////////

/////////////// NOTES ////////////////

exports.getNoteFromList = function (list_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/notes?list_id=' + list_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}

exports.getNoteFromTask = function (task_id){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/notes?task_id=' + task_id,
    method: 'GET'
  }

  var options = _.extend(url, keys);
  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}


exports.createNote = function (task_id, content){
  var deferred = q.defer();
  var url = {
    url:  'https://a.wunderlist.com/api/v1/notes',
    method: 'POST',
    json: {
      "task_id": task_id,
      "content": content
    }
  }

  var options = _.extend(url, keys);

  request(options, function(err, response, body){
    if (err) {
      deferred.reject(err);
    }

    if (response) {
      deferred.resolve(response)
    }
  });

  return deferred.promise;
}


exports.deleteNote = function (note_id, revision){
  var deferred = q.defer();

  var data = {
    url: 'https://a.wunderlist.com/api/v1/notes/' + note_id + '?revision=' + revision,
    method: 'DELETE'
  }

  var options = _.extend(data, keys);

  request(options, function(err, response, body){
      if (err) {
        deferred.reject(err);
      }

      if (response) {
        deferred.resolve(response)
      }
    });

    return deferred.promise;
}
