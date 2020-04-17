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
socket.on('connect', function () {
  socket.emit('gamestate', {
    room: room
  });
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
  login: ''
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

    for (var i = 0; i < user1.points[key]; i++) {
      console.log('points key:', points[key]);
      points[key - 1].append(insertChecker(className1));
    }
  }

  for (var _key in user2.points) {
    console.log('key:', _key);

    for (var _i = 0; _i < user2.points[_key]; _i++) {
      console.log('points key:', points[_key]);

      points[_key - 1].append(insertChecker(className2));
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

function highlightLast(pointNumber) {
  var direction = pointNumber > 11 ? 'top' : 'bottom';

  if (direction == 'top') {
    if (points[pointNumber].childNodes.length > 1) points[pointNumber].lastChild.className += ' checker-move';else return;
  }

  if (direction == 'bottom') {
    if (points[pointNumber].childNodes.length > 1) points[pointNumber].firstChild.className += ' checker-move';else return;
  }
}

function highlightMoves() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  console.log(args);

  for (var pointNumber in args) {
    if (!pointNumber || !points[pointNumber]) continue;

    if (points[pointNumber].childNodes[0] != undefined) {
      if (points[pointNumber].childNodes[0].className.includes('checker-move')) return;
      highlightLast(pointNumber);
      return;
    }

    console.log(pointNumber);
    points[pointNumber].append(insertChecker('checker-move'));
  }

  ;
}

function showAvMovesDatabase(from, dices) {
  from = parsePointsId(from);
  console.log(from);
  console.log(dices);
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

    highlightMoves(data.i, data.point_1, data.point_2);
  });
  /*socket.on('check_answer', data =>{
      parseCheckAnswer(data, from + dicesObj.first, from + dicesObj.second);
  })*/
}

function getOpenCheckers() {
  console.log(points);
  var color = user1.login == currUser.login ? user1.color : user2.color;
  console.log(color);
  var checkers = [];

  if (color == 'w') {
    var _iterator = _createForOfIteratorHelper(points),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        if (elem.className == 'points-bottom' && elem.childElementCount != 0) {
          if (elem.firstChild.className.includes('checker-white')) checkers.push(elem.firstChild);
        }

        if (elem.className == 'points-top' && elem.childElementCount != 0) {
          if (elem.lastChild.className.includes('checker-white')) checkers.push(elem.lastChild);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (color == 'b') {
    var _iterator2 = _createForOfIteratorHelper(points),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _elem = _step2.value;

        if (_elem.className == 'points-bottom' && _elem.childElementCount != 0) {
          if (_elem.firstChild.className.includes('checker-black')) checkers.push(_elem.firstChild);
        }

        if (_elem.className == 'points-top' && _elem.childElementCount != 0) {
          if (_elem.lastChild.className.includes('checker-black')) checkers.push(_elem.lastChild);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return checkers;
}

function unclickElements(checkers) {
  points.forEach(function (point) {
    var childrenArray = _toConsumableArray(point.childNodes);

    var _iterator3 = _createForOfIteratorHelper(childrenArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var child = _step3.value;
        console.log(child);
        if (child.className.includes('checker-move') && (child.nextSibling || child.previousSibling)) child.className = child.className.replace(/\bchecker-move\b/ig, '');else if (child.className.includes('checker-move')) point.removeChild(child);
        continue;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });

  var _iterator4 = _createForOfIteratorHelper(checkers),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var elem = _step4.value;
      elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function showAvailableMoves() {
  console.log('dices:', currDices);
  var openCheckers = getOpenCheckers();

  var _iterator5 = _createForOfIteratorHelper(openCheckers),
      _step5;

  try {
    var _loop = function _loop() {
      var elem = _step5.value;
      elem.addEventListener('mouseover', function () {
        event.preventDefault();
        elem.className += ' checker-hover';
      });
      elem.addEventListener('mouseout', function () {
        event.preventDefault();
        elem.className = elem.className.replace(/\bchecker-hover\b/ig, '');
      });
      elem.addEventListener('click', function () {
        if (elem.className.match(/\bchecker-clicked\b/ig)) {
          elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
          unclickElements(checkers);
          return;
        }

        if (elem.className.match(/\bchecker-move\b/ig)) {
          unclickElements(checkers);
          event.preventDefault();
          elem.className += ' checker-clicked'; //clickCheckerMove(currChecker.pointFrom);

          return;
        }

        unclickElements(checkers);
        event.preventDefault();
        elem.className += ' checker-clicked';
        currChecker.pointFrom = elem.parentNode.id;
        showAvMovesDatabase(currChecker.pointFrom, currDices);
      });
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
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
    firstButton.className = firstButton.className.replace(/\bhide\b/ig, '');
  } else {
    if (container[1].firstElementChild.textContent == username2.name && currUser.login == username2.login) {
      secondplayer[0].className += ' roll';
      currentContainer = secondplayer;
      secondButton.className = secondButton.className.replace(/\bhide\b/ig, '');
    }
  }

  var _iterator6 = _createForOfIteratorHelper(rolledDices),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var elem = _step6.value;
      var image = document.createElement('img');
      console.log(elem);

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
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

function clearDiceContainer(container) {
  var children = _toConsumableArray(container.childNodes);

  console.log(children);

  var _iterator7 = _createForOfIteratorHelper(children),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var child = _step7.value;
      if (child.tagName == 'H2') continue;
      container.removeChild(child);
      console.log(container);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
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

  var _iterator8 = _createForOfIteratorHelper(container),
      _step8;

  try {
    var _loop2 = function _loop2() {
      var elem = _step8.value;
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

    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  if (error == 5) {
    var _iterator9 = _createForOfIteratorHelper(container),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var elem = _step9.value;
        elem.removeEventListener('click', eventCallback);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    error = 0;
  }
}

var checkers = '';
setTimeout(function () {
  fillTheBoard();
  drawRolledDices([1, 1]);
  rollTheDices();
  checkers = _toConsumableArray(document.getElementsByClassName('checker'));
}, 1000);

/***/ })
/******/ ]);