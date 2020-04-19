/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Notifications */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notify; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notifications = /*#__PURE__*/function () {
  function Notifications() {
    _classCallCheck(this, Notifications);
  }

  _createClass(Notifications, [{
    key: "error",
    value: function error(message_) {
      var popup = document.createElement('div');
      popup.className = 'popup__error';
      popup.innerHTML = "<span>".concat(message_, "</span>");

      var container = _toConsumableArray(document.getElementsByClassName('notifications'));

      container[0].appendChild(popup);
      setTimeout(function () {
        popup.remove();
      }, 7000);
    }
  }, {
    key: "success",
    value: function success(message_) {
      console.log(message_);
      var popup = document.createElement('div');
      popup.className = 'popup__success';
      popup.innerHTML = "<span>".concat(message_, "</span>");

      var container = _toConsumableArray(document.getElementsByClassName('notifications'));

      container[0].appendChild(popup);
      setTimeout(function () {
        popup.remove();
      }, 7000);
    }
  }]);

  return Notifications;
}();
var Notify = new Notifications();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var socket = io.connect();

var pointsTop = _toConsumableArray(document.getElementById('points_top').children);

var pointsBottom = _toConsumableArray(document.getElementById('points_bottom').children).reverse();

var points = pointsBottom.concat(pointsTop);
var currDices = [];
var room = window.location.pathname.slice(6);
var currChecker = {
  pointNumber: 0,
  checkerCount: 0
};
var prevOpenCheckers = [];
socket.on('connect', function () {
  socket.emit('gamestate', {
    room: room
  });
});
socket.on('unavailable', function () {
  _notifications_js__WEBPACK_IMPORTED_MODULE_0__[/* Notify */ "a"].error('Так сходить нельзя!');
});
socket.on('game_state', function (data) {
  socket.emit('getGameState', {
    room: room
  });
});
socket.on('getNames', function (data) {
  socket.emit('get_usernames', {
    room: room
  });
});
var username1 = {};
var username2 = {};
socket.on('usernames', function (data) {
  socket.emit('user_names', {
    room: room
  });
});
socket.on('reload', function (data) {
  document.location.reload(true);
});
socket.on('win', function (data) {
  _notifications_js__WEBPACK_IMPORTED_MODULE_0__[/* Notify */ "a"].success('Вы выиграли! :)');
});
socket.on('lose', function (data) {
  _notifications_js__WEBPACK_IMPORTED_MODULE_0__[/* Notify */ "a"].error('Вы проиграли :(');
});
socket.on('set_username', function (data) {
  username1.login = data.first_login;
  username2.login = data.second_login;
  username1.name = data.first_name;
  username2.name = data.second_name;
  console.log(username1, username2);

  var firstname = _toConsumableArray(document.getElementsByClassName('first__name'));

  firstname[0].textContent = "".concat(username1.name);

  var secondname = _toConsumableArray(document.getElementsByClassName('second__name'));

  secondname[0].textContent = "".concat(username2.name);
});
var user1 = {
  id: 0,
  login: '',
  color: '',
  points: {}
};
var user2 = {
  id: 0,
  login: '',
  color: '',
  points: {}
};
var currUser = {
  login: '',
  color: ''
};
var currMove = {
  from: 0,
  to: 0,
  multipoint: 0,
  count: 0
};
var currTo = {
  to: 0,
  multi: 0,
  className: ''
};
socket.on('set_values', function (data) {
  console.log(data.data);
  currUser.login = data.login;
  user1.id = data.data[0].id_player;
  user1.login = data.data[0].login;
  user1.points = data.data.reduce(function (acc, curr) {
    if (curr.id_player == user1.id) {
      acc[curr.point_number] = curr.checkers_count;
    }

    return acc;
  }, {});
  user1.color = data.data[0].color;
  user2.id = data.data[data.data.length - 1].id_player;
  user2.color = data.data[data.data.length - 1].color;
  user2.login = data.data[data.data.length - 1].login;
  user2.points = data.data.reduce(function (acc, curr) {
    if (curr.id_player == user2.id) {
      acc[curr.point_number] = curr.checkers_count;
    }

    return acc;
  }, {});
  currUser.color = user1.login == currUser.login ? user1.color : user2.color;
  console.log(currUser);
});

function insertChecker(checkerClassName) {
  var checker = document.createElement('div');
  checker.className = checkerClassName;
  return checker;
}

function fillTheBoard() {
  console.log(user1);
  console.log(user2);
  var className1 = user1.color == 'w' ? 'checker-white checker' : 'checker-black checker';
  var className2 = user2.color == 'w' ? 'checker-white checker' : 'checker-black checker';
  console.log(user1.points);

  for (var key in user1.points) {
    console.log('key:', key);
    var flag = false;
    var k = 0;

    for (var i = 0; i < user1.points[key]; i++) {
      if (i > 4) {
        k = i;
        flag = true;
        break;
      }

      console.log('points key:', points[key - 1]);
      points[key - 1].append(insertChecker(className1));
    }

    if (flag) {
      var tmp = user1.points[key] - k;
      tmp = tmp == 1 ? 2 : tmp;

      if (key > 13) {
        points[key - 1].lastChild.textContent = "".concat(tmp);
      } else {
        points[key - 1].firstChild.textContent = "".concat(tmp);
      }
    }
  }

  for (var _key in user2.points) {
    console.log('key:', _key);
    var _flag = false;
    var _k = 0;

    for (var _i = 0; _i < user2.points[_key]; _i++) {
      if (_i > 4) {
        _k = _i;
        _flag = true;
        break;
      }

      console.log('points key:', points[_key]);

      points[_key - 1].append(insertChecker(className2));
    }

    if (_flag) {
      var _tmp = user1.points[_key] - _k;

      _tmp = _tmp == 1 ? 2 : _tmp;

      if (_key > 13) {
        points[_key - 1].lastChild.textContent = "".concat(_tmp);
      } else {
        points[_key - 1].firstChild.textContent = "".concat(_tmp);
      }
    }
  }

  for (var _i2 = 0; _i2 < points.length; _i2++) {
    if (_i2 > 12) {
      if (points[_i2 - 1].childNodes[0] != undefined) points[_i2 - 1].lastChild.className += ' rotate';
    }
  }
}

function parsePointsId(pointId) {
  switch (pointId) {
    case 'one':
      return 1;

    case 'two':
      return 2;

    case 'three':
      return 3;

    case 'four':
      return 4;

    case 'five':
      return 5;

    case 'six':
      return 6;

    case 'seven':
      return 7;

    case 'eight':
      return 8;

    case 'nine':
      return 9;

    case 'ten':
      return 10;

    case 'eleven':
      return 11;

    case 'twelve':
      return 12;

    case 'thirteen':
      return 13;

    case 'fourteen':
      return 14;

    case 'fifteen':
      return 15;

    case 'sixteen':
      return 16;

    case 'seventeen':
      return 17;

    case 'eightteen':
      return 18;

    case 'nineteen':
      return 19;

    case 'twenty':
      return 20;

    case 'twentyone':
      return 21;

    case 'twentytwo':
      return 22;

    case 'twentythree':
      return 23;

    case 'twentyfour':
      return 24;
  }
}

function placeLastCheckerTop(from, to, multi) {
  var pace = Math.abs(from - to);
  console.log('pace', pace);

  if (currMove.count == 2) {
    unclickElements(checkers);
    return;
  }

  if (to == multi) {
    unclickElements(checkers);
    currDices = [0, 0];
    currMove.count = 2;
  }

  points[to - 1].lastChild.className = points[to - 1].lastChild.className.replace(/\bchecker-move\b/, '');

  if (from > 13) {
    var _count = points[from - 1].lastChild.textContent;
    if (!_count) points[from - 1].removeChild(points[from - 1].lastChild);
    if (_count == 2) points[from - 1].lastChild.textContent = '';
    if (_count > 2) points[from - 1].lastChild.textContent = _count - 1;
  } else {
    var _count2 = points[from - 1].firstChild.textContent;
    if (!_count2) points[from - 1].removeChild(points[from - 1].firstChild);
    if (_count2 == 2) points[from - 1].firstChild.textContent = '';
    if (_count2 > 2) points[from - 1].firstChild.textContent = _count2 - 1;
  }

  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  var count = points[to - 1].lastChild.textContent;
  if (!count) points[to - 1].lastChild.textContent = "".concat(2);else points[to - 1].lastChild.textContent = "".concat(++count);
  points[to - 1].lastChild.style.transform = 'rotate(-90deg);';
  currMove.multi = multi - 1 == to ? multi : 0;
  currMove.from = from;
  currMove.to = to;
  currMove.count++;

  for (var i = 0; i < currDices.length; i++) {
    if (currDices[i] == pace) {
      currDices[i] = 0;
      break;
    }
  }

  console.log('place checker dices', currDices);
  unclickElements(checkers);
  console.log('currMove:', currMove);
  socket.emit('makemove', {
    login: currUser.login,
    from: from,
    to: to
  });
  removeListeners();
  showAvailableMoves();
}

function placeCheckerTop(from, to, multi) {
  console.log('top from, to, multi:', from, to, multi);
  var pace = Math.abs(from - to);
  console.log('pace', pace);

  if (currMove.count == 2) {
    unclickElements(checkers);
    return;
  }

  if (to == multi) {
    unclickElements(checkers);
    currDices = [0, 0];
    currMove.count = 2;
  }

  points[to - 1].removeChild(points[to - 1].lastChild);

  if (from > 13) {
    var count = points[from - 1].lastChild.textContent;
    if (!count) points[from - 1].removeChild(points[from - 1].lastChild);
    if (count == 2) points[from - 1].lastChild.textContent = '';
    if (count > 2) points[from - 1].lastChild.textContent = count - 1;
  } else {
    var _count3 = points[from - 1].firstChild.textContent;
    if (!_count3) points[from - 1].removeChild(points[from - 1].firstChild);
    if (_count3 == 2) points[from - 1].firstChild.textContent = '';
    if (_count3 > 2) points[from - 1].firstChild.textContent = _count3 - 1;
  }

  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  points[to - 1].append(insertChecker(className));
  currMove.multi = multi - 1 == to ? multi : 0;
  currMove.from = from;
  currMove.to = to;
  currMove.count++;

  for (var i = 0; i < currDices.length; i++) {
    if (currDices[i] == pace) {
      currDices[i] = 0;
      break;
    }
  }

  console.log('place checker dices', currDices);
  unclickElements(checkers);
  console.log('currMove:', currMove);
  socket.emit('makemove', {
    login: currUser.login,
    from: from,
    to: to
  });
  removeListeners();
  showAvailableMoves();
}

function placeCheckerBottom(from, to, multi) {
  console.log('bottom from, to, multi:', from, to, multi);
  var pace = Math.abs(from - to);
  console.log('pace', pace);

  if (currMove.count == 2) {
    unclickElements(checkers);
    return;
  }

  if (to == multi) {
    unclickElements(checkers);
    currDices = [0, 0];
    currMove.count = 2;
  }

  points[to - 1].removeChild(points[to - 1].firstChild);

  if (from > 13) {
    var count = points[from - 1].lastChild.textContent;
    if (!count) points[from - 1].removeChild(points[from - 1].lastChild);
    if (count == 2) points[from - 1].lastChild.textContent = '';
    if (count > 2) points[from - 1].lastChild.textContent = count - 1;
  } else {
    var _count4 = points[from - 1].firstChild.textContent;
    if (!_count4) points[from - 1].removeChild(points[from - 1].firstChild);
    if (_count4 == 2) points[from - 1].firstChild.textContent = '';
    if (_count4 > 2) points[from - 1].firstChild.textContent = _count4 - 1;
  }

  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  points[to - 1].prepend(insertChecker(className));
  currMove.multi = multi - 1 == to ? multi : 0;
  currMove.from = from;
  currMove.to = to;
  currMove.count++;

  for (var i = 0; i < currDices.length; i++) {
    if (currDices[i] == pace) {
      currDices[i] = 0;
      break;
    }
  }

  console.log('place checker dices', currDices);
  unclickElements(checkers);
  console.log('currMove:', currMove);
  socket.emit('makemove', {
    login: currUser.login,
    from: from,
    to: to
  });
  removeListeners();
  showAvailableMoves();
}

function placeLastCheckerBottom(from, to, multi) {
  console.log('placekdjklfd', from, to, multi);
  var pace = Math.abs(from - to);
  console.log('pace', pace);

  if (currMove.count == 2) {
    unclickElements(checkers);
    return;
  }

  if (to == multi) {
    unclickElements(checkers);
    currDices = [0, 0];
    currMove.count = 2;
  }

  points[to - 1].firstChild.className = points[to - 1].firstChild.className.replace(/\bchecker-move\b/, '');

  if (from > 13) {
    var _count5 = points[from - 1].lastChild.textContent;
    if (!_count5) points[from - 1].removeChild(points[from - 1].lastChild);
    if (_count5 == 2) points[from - 1].lastChild.textContent = '';
    if (_count5 > 2) points[from - 1].lastChild.textContent = _count5 - 1;
  } else {
    var _count6 = points[from - 1].firstChild.textContent;
    if (!_count6) points[from - 1].removeChild(points[from - 1].firstChild);
    if (_count6 == 2) points[from - 1].firstChild.textContent = '';
    if (_count6 > 2) points[from - 1].firstChild.textContent = _count6 - 1;
  }

  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  var count = points[to - 1].firstChild.textContent;
  if (!count) points[to - 1].firstChild.textContent = "".concat(2);else points[to - 1].firstChild.textContent = "".concat(++count);
  currMove.multi = multi - 1 == to ? multi : 0;
  currMove.from = from;
  currMove.to = to;
  currMove.count++;

  for (var i = 0; i < currDices.length; i++) {
    if (currDices[i] == pace) {
      currDices[i] = 0;
      break;
    }
  }

  console.log('place checker dices', currDices);
  unclickElements(checkers);
  console.log('currMove:', currMove);
  socket.emit('makemove', {
    login: currUser.login,
    from: from,
    to: to
  });
  removeListeners();
  showAvailableMoves();
}

function eventPlaceLastCheckerTop() {
  event.preventDefault();
  placeLastCheckerTop(currChecker.pointNumber, currTo.to + 1, currTo.multi);
  console.log('yes', pointNumber);
}

function eventPlaceCheckerTop() {
  event.preventDefault();
  this.className.replace(/\bchecker-move\b/ig, currTo.className);
  placeCheckerTop(currChecker.pointNumber, currTo.to + 1, currTo.multi);
  console.log('yes', pointNumber);
}

function eventPlaceLastCheckerBottom() {
  event.preventDefault();
  placeLastCheckerBottom(currChecker.pointNumber, currTo.to + 1, currTo.multi);
  console.log('skdsjdklsdjlkssd', pointNumber);
  console.log(pointNumber);
}

function eventPlaceCheckerBottom() {
  event.preventDefault();
  this.className.replace(/\bchecker-move\b/ig, currTo.className);
  placeCheckerBottom(currChecker.pointNumber, currTo.to + 1, currTo.multi);
  console.log('skdsd', pointNumber);
  console.log(pointNumber);
}

function highlightLast(pointNumber, multi) {
  var direction = pointNumber > 12 ? 'top' : 'bottom';
  console.log('highlightlast');
  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  currTo.className = className;

  if (direction == 'top') {
    if (points[pointNumber].childNodes.length == 5) {
      console.log('top equal 4', pointNumber);
      points[pointNumber].lastChild.className += ' checker-move';
      currTo.to = pointNumber;
      currTo.multi = multi;
      points[pointNumber].lastChild.addEventListener('click', eventPlaceLastCheckerTop, true);
    } else if (points[pointNumber].childNodes.length < 5) {
      console.log('top less 4', pointNumber);
      currTo.to = pointNumber;
      currTo.multi = multi;
      points[pointNumber].appendChild(insertChecker('checker-move'));
      points[pointNumber].lastChild.addEventListener('click', eventPlaceCheckerTop, true);
    }

    return;
  }

  if (direction == 'bottom') {
    if (points[pointNumber].childNodes.length == 5) {
      console.log('bottom equal 4', pointNumber);
      points[pointNumber].firstChild.className += ' checker-move';
      currTo.to = pointNumber;
      currTo.multi = multi;
      points[pointNumber].firstChild.addEventListener('click', eventPlaceLastCheckerBottom, true);
    } else if (points[pointNumber].childNodes.length < 5) {
      console.log('bottom less 4', pointNumber);
      points[pointNumber].prepend(insertChecker('checker-move'));
      currTo.to = pointNumber;
      currTo.multi = multi;
      points[pointNumber].firstChild.addEventListener('click', eventPlaceCheckerBottom, true);
    }

    return;
  }
}

function removeListeners() {
  var _iterator = _createForOfIteratorHelper(prevOpenCheckers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.removeEventListener('mouseover', mouseOver, true);
      elem.removeEventListener('mouseout', mouseOut, true);
      elem.removeEventListener('click', clickElem, true);
      elem.removeEventListener('click', eventPlaceLastCheckerTop, true);
      elem.removeEventListener('click', eventPlaceCheckerTop, true);
      elem.removeEventListener('click', eventPlaceLastCheckerBottom, true);
      elem.removeEventListener('click', eventPlaceCheckerBottom, true);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function placeChecker(from, to, multi) {
  console.log('from, to, multi: ', from, to, multi);
  console.log('currMove count:', currMove.count);
  var pace = Math.abs(from - to);
  console.log('pace', pace);

  if (currMove.count == 2) {
    unclickElements(checkers);
    return;
  }

  if (to > 13) points[to - 1].removeChild(points[to - 1].lastChild);else points[to - 1].removeChild(points[to - 1].firstChild);

  if (from > 13) {
    if (to == multi) {
      unclickElements(checkers);
      currDices = [0, 0];
      currMove.count = 2;
    }

    var count = points[from - 1].lastChild.textContent;
    if (!count) points[from - 1].removeChild(points[from - 1].lastChild);
    if (count == 2) points[from - 1].lastChild.textContent = '';
    if (count > 2) points[from - 1].lastChild.textContent = count - 1;
  } else {
    if (to == multi) {
      unclickElements(checkers);
      currDices = [0, 0];
    }

    var _count7 = points[from - 1].firstChild.textContent;
    if (!_count7) points[from - 1].removeChild(points[from - 1].firstChild);
    if (_count7 == 2) points[from - 1].firstChild.textContent = '';
    if (_count7 > 2) points[from - 1].firstChild.textContent = _count7 - 1;
  }

  var className = currUser.color == 'w' ? 'checker-white' : 'checker-black';
  points[to - 1].appendChild(insertChecker(className));
  currMove.multi = multi - 1 == to ? multi : 0;
  currMove.from = from;
  currMove.to = to;
  currMove.count++;

  for (var i = 0; i < currDices.length; i++) {
    if (currDices[i] == pace) {
      currDices[i] = 0;
      break;
    }
  }

  console.log('place checker dices', currDices);
  unclickElements(checkers);
  console.log('currMove:', currMove);
  socket.emit('makemove', {
    login: currUser.login,
    from: from,
    to: to
  });
  removeListeners();
  showAvailableMoves();
}

function insertHighlightChecker(checkerClassName, pointNumber, multi) {
  var checker = document.createElement('div');
  checker.className = checkerClassName;
  checker.addEventListener('click', function (event) {
    event.preventDefault(); //current points[pointNumber];

    console.log('insert highlight:', currChecker.pointNumber, pointNumber);
    placeChecker(currChecker.pointNumber, pointNumber, multi);
  });
  return checker;
}

function highlightMoves() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  console.log(args);
  var multi = args[0];
  var flag = false;

  for (var i = 0; i < args.length; i++) {
    var _pointNumber = args[i];
    console.log(_pointNumber);
    if (!_pointNumber || !points[_pointNumber]) continue;

    if (points[_pointNumber - 1].childNodes[0] != undefined) {
      if (points[_pointNumber - 1].childNodes[0].className.includes('checker-move')) {
        console.log('here');
        continue;
      }

      console.log('ooooor here');
      highlightLast(_pointNumber - 1, multi);
      continue;
    }

    console.log('highlightMoves currchecker ', currChecker.pointNumber);

    points[_pointNumber - 1].append(insertHighlightChecker('checker-move', _pointNumber, multi));
  }

  ;
}

function showAvMovesDatabase(from, dices) {
  console.log(from);
  console.log('dices database', dices);
  currChecker.pointNumber = from;
  console.log('database', currChecker.pointNumber);
  socket.emit('free_points', {
    login: currUser.login,
    from: from,
    dice_1: dices[0],
    dice_2: dices[1]
  });
  socket.on('show_freePoints', function (data) {
    console.log(data);

    for (var key in data) {
      if (key == undefined) key = 0;
    }

    highlightMoves(data.multipoint, data.point_1, data.point_2);
  });
}

function getOpenCheckers() {
  console.log(points);
  var color = user1.login == currUser.login ? user1.color : user2.color;
  console.log(color);
  var checkers = [];

  if (color == 'w') {
    var _iterator2 = _createForOfIteratorHelper(points),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var elem = _step2.value;

        if (elem.className == 'points-bottom' && elem.childElementCount != 0) {
          if (elem.firstChild.className.includes('checker-white')) checkers.push(elem.firstChild);
        }

        if (elem.className == 'points-top' && elem.childElementCount != 0) {
          if (elem.lastChild.className.includes('checker-white')) checkers.push(elem.lastChild);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else if (color == 'b') {
    var _iterator3 = _createForOfIteratorHelper(points),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _elem = _step3.value;

        if (_elem.className == 'points-bottom' && _elem.childElementCount != 0) {
          if (_elem.firstChild.className.includes('checker-black')) checkers.push(_elem.firstChild);
        }

        if (_elem.className == 'points-top' && _elem.childElementCount != 0) {
          if (_elem.lastChild.className.includes('checker-black')) checkers.push(_elem.lastChild);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  return checkers;
}

function unclickElements(checkers) {
  points.forEach(function (point) {
    var childrenArray = _toConsumableArray(point.childNodes);

    var _iterator4 = _createForOfIteratorHelper(childrenArray),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var child = _step4.value;
        console.log(child);
        if (child.className.includes('checker-move') && (child.nextSibling || child.previousSibling)) child.className = child.className.replace(/\bchecker-move\b/ig, '');else if (child.className.includes('checker-move')) point.removeChild(child);
        continue;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });

  var _iterator5 = _createForOfIteratorHelper(checkers),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var elem = _step5.value;
      elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}

function mouseOver() {
  if (currMove.count == 2) return;
  event.preventDefault();
  this.className += ' checker-hover';
}

function mouseOut() {
  if (currMove.count == 2) return;
  event.preventDefault();
  this.className = this.className.replace(/\bchecker-hover\b/ig, '');
}

function clickElem() {
  if (currMove.count == 2) return;

  if (this.className.match(/\bchecker-move\b/ig)) {
    this.className = this.className.replace(/\bchecker-move\b/ig, '');
    unclickElements(checkers);
    event.preventDefault();
    return;
  }

  if (this.className.match(/\bchecker-clicked\b/ig)) {
    this.className = this.className.replace(/\bchecker-clicked\b/ig, '');
    unclickElements(checkers);
    return;
  }

  unclickElements(checkers);
  event.preventDefault();
  this.className += ' checker-clicked';
  currChecker.pointFrom = parsePointsId(this.parentNode.id);
  console.log(this.parentNode.id);
  console.log('showavmoves', currChecker.pointFrom);
  showAvMovesDatabase(currChecker.pointFrom, currDices);
}

function showAvailableMoves() {
  console.log('dices:', currDices);
  if (currMove.count == 2) return;
  var openCheckers = getOpenCheckers();
  prevOpenCheckers = openCheckers;
  console.log(openCheckers);

  var _iterator6 = _createForOfIteratorHelper(openCheckers),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var elem = _step6.value;
      elem.addEventListener('mouseover', mouseOver, true);
      elem.addEventListener('mouseout', mouseOut, true);
      elem.addEventListener('click', clickElem, true);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

function drawRolledDices(rolledDices) {
  var container = _toConsumableArray(document.getElementsByClassName('dices'));

  var firstplayer = _toConsumableArray(document.getElementsByClassName('first__player'));

  var secondplayer = _toConsumableArray(document.getElementsByClassName('second__player'));

  var firstButton = _toConsumableArray(document.getElementsByClassName('first__button'))[0];

  var secondButton = _toConsumableArray(document.getElementsByClassName('second__button'))[0];

  var currentContainer = 0;

  if (container[0].firstElementChild.textContent == username1.name && currUser.login == username1.login) {
    firstplayer[0].className += ' roll';
    currentContainer = firstplayer;
    console.log(currentContainer);
    firstButton.className = firstButton.className.replace(/\bhide\b/ig, '');
    firstButton.addEventListener('click', function () {
      event.preventDefault();
      if (currMove.count != 2) return;
      console.log('firstbutton');
      socket.emit('checkwinner', {
        id_game: room,
        login: currUser.login
      });
    });
  } else {
    if (container[1].firstElementChild.textContent == username2.name && currUser.login == username2.login) {
      secondplayer[0].className += ' roll';
      currentContainer = secondplayer;
      console.log(currentContainer);
      secondButton.className = secondButton.className.replace(/\bhide\b/ig, '');
      secondButton.addEventListener('click', function () {
        event.preventDefault();
        if (currMove.count != 2) return;
        console.log('secondbutton');
        socket.emit('checkwinner', {
          id_game: room,
          login: currUser.login
        });
      });
    }
  }

  var _iterator7 = _createForOfIteratorHelper(rolledDices),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var elem = _step7.value;
      var image = document.createElement('img');
      console.log(elem);
      console.log(currentContainer);

      switch (elem) {
        case 1:
          image.src = '../images/one.png';
          currentContainer[0].appendChild(image);
          break;

        case 2:
          image.src = '../images/two.png';
          currentContainer[0].appendChild(image);
          break;

        case 3:
          image.src = '../images/three.png';
          currentContainer[0].appendChild(image);
          break;

        case 4:
          image.src = '../images/four.png';
          currentContainer[0].appendChild(image);
          break;

        case 5:
          image.src = '../images/five.png';
          currentContainer[0].appendChild(image);
          break;

        case 6:
          image.src = '../images/six.png';
          currentContainer[0].appendChild(image);
          break;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}

function clearDiceContainer(container) {
  var children = _toConsumableArray(container.childNodes);

  console.log(children);

  var _iterator8 = _createForOfIteratorHelper(children),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var child = _step8.value;
      if (child.tagName == 'H2') continue;
      container.removeChild(child);
      console.log(container);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}

var error = 0;

function rollTheDices() {
  var container = _toConsumableArray(document.getElementsByClassName('roll'));

  var eventCallback = function eventCallback(event) {
    event.preventDefault();
    socket.emit('roll', {
      login: currUser.login
    });
  };

  var _iterator9 = _createForOfIteratorHelper(container),
      _step9;

  try {
    var _loop = function _loop() {
      var elem = _step9.value;
      elem.addEventListener('click', eventCallback);
      socket.on('rollvalues', function (data) {
        currDices = [data.dice_1, data.dice_2];
        console.log(currDices);
        clearDiceContainer(elem);
        drawRolledDices(currDices);
        showAvailableMoves();
      });
      socket.on('notturn', function (data) {
        _notifications_js__WEBPACK_IMPORTED_MODULE_0__[/* Notify */ "a"].error('Не Ваш ход!');
      });
      socket.on('twice', function (data) {
        _notifications_js__WEBPACK_IMPORTED_MODULE_0__[/* Notify */ "a"].error('Вы уже кидали кубики!');
        error = 5;
      });
    };

    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  if (error == 5) {
    var _iterator10 = _createForOfIteratorHelper(container),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var elem = _step10.value;
        elem.removeEventListener('click', eventCallback);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    error = 0;
  }
}

function timer() {
  fillTheBoard();
  drawRolledDices([1, 1]);
  rollTheDices();
  checkers = _toConsumableArray(document.getElementsByClassName('checker'));
}

var checkers = '';
setTimeout(function () {
  timer();
}, 10000);

/***/ })
/******/ ]);