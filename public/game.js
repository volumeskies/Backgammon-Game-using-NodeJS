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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
var dicesObj = {
  first: 0,
  second: 0
};

function insertChecker(checkerClassName) {
  var checker = document.createElement('div');
  checker.className = checkerClassName;
  return checker;
}

function fillTheBoard() {
  for (var i = 0; i < 2; i++) {
    points[0].append(insertChecker('checker-black checker'));
    points[23].append(insertChecker('checker-white checker'));
  }

  for (var _i = 0; _i < 5; _i++) {
    points[11].append(insertChecker('checker-black checker'));
    points[18].append(insertChecker('checker-black checker'));
    points[5].append(insertChecker('checker-white checker'));
    points[12].append(insertChecker('checker-white checker'));
  }

  for (var _i2 = 0; _i2 < 3; _i2++) {
    points[16].append(insertChecker('checker-black checker'));
    points[7].append(insertChecker('checker-white checker'));
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

function highlightMoves(pointNumber) {
  console.log('point number:', pointNumber);
  points[pointNumber - 1].append(insertChecker('checker-move'));
}

function parseCheckAnswer(answ, dice_1, dice_2) {
  switch (answ) {
    case 'd1no':
      break;

    case 'd1yes':
      highlightMoves(dice_1);
      break;

    case 'd2no':
      break;

    case 'd2yes':
      highlightMoves(dice_2);
      break;

    case 'd3no':
      break;

    case 'd3yes':
      highlightMoves(dice_1 + dice_2);
      break;
  }
}

function showAvMovesDatabase(from, dicesObj) {
  from = parsePointsId(from);
  console.log(from);
  socket.emit('check_points', {
    from: from,
    dice_1: dicesObj.first,
    dice_2: dicesObj.second
  });
  socket.on('check_answer', function (data) {
    parseCheckAnswer(data, from + dicesObj.first, from + dicesObj.second);
  });
}

function getOpenCheckers() {
  console.log(points);
  var checkers = [];

  var _iterator = _createForOfIteratorHelper(points),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;

      if (elem.className == 'points-bottom' && elem.childElementCount != 0) {
        checkers.push(elem.firstChild);
      }

      if (elem.className == 'points-top' && elem.childElementCount != 0) {
        checkers.push(elem.lastChild);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return checkers;
}

function showAvailableMoves(rolledDices) {
  var checkers = getOpenCheckers();
  console.log('open checkers: ', checkers);

  var _iterator2 = _createForOfIteratorHelper(checkers),
      _step2;

  try {
    var _loop = function _loop() {
      var elem = _step2.value;
      elem.addEventListener('mouseover', function () {
        event.preventDefault();
        elem.className += ' checker-hover';
      });
      elem.addEventListener('mouseout', function () {
        event.preventDefault();
        elem.className = elem.className.replace(/\bchecker-hover\b/ig, '');
      });
      elem.addEventListener('click', function () {
        event.preventDefault();

        if (elem.className.match(/\bchecker-clicked\b/ig)) {
          elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
          return;
        }

        elem.className += ' checker-clicked';
        showAvMovesDatabase(elem.parentNode.id, rolledDices);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function randNumber() {
  var rand = 1 + Math.random() * 6;
  return Math.floor(rand);
}

function rollTheDicesArray() {
  for (var key in dicesObj) {
    if (dicesObj.hasOwnProperty(key)) {
      dicesObj[key] = randNumber();
    }
  }

  var dices = [dicesObj.first, dicesObj.second];
  console.log(dicesObj);
  return dices;
}

function drawRolledDices(rolledDices) {
  var container = _toConsumableArray(document.getElementsByClassName('dices'));

  console.log(container);

  var _iterator3 = _createForOfIteratorHelper(rolledDices),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var elem = _step3.value;
      var image = document.createElement('img');
      console.log(elem);

      switch (elem) {
        case 1:
          image.src = './images/one.png';
          container[0].appendChild(image);
          break;

        case 2:
          image.src = './images/two.png';
          container[0].appendChild(image);
          break;

        case 3:
          image.src = './images/three.png';
          container[0].appendChild(image);
          break;

        case 4:
          image.src = './images/four.png';
          container[0].appendChild(image);
          break;

        case 5:
          image.src = './images/five.png';
          container[0].appendChild(image);
          break;

        case 6:
          image.src = './images/six.png';
          container[0].appendChild(image);
          break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function clearDiceContainer(container) {
  var children = _toConsumableArray(container.childNodes);

  console.log(children);

  var _iterator4 = _createForOfIteratorHelper(children),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var child = _step4.value;
      if (child.tagName == 'H2') continue;
      container.removeChild(child);
      console.log(container);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function rollTheDices() {
  var container = _toConsumableArray(document.getElementsByClassName('dices'));

  var _iterator5 = _createForOfIteratorHelper(container),
      _step5;

  try {
    var _loop2 = function _loop2() {
      var elem = _step5.value;
      elem.addEventListener('click', function () {
        event.preventDefault();
        var dices = rollTheDicesArray();
        clearDiceContainer(elem);
        drawRolledDices(dices);
      });
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}

fillTheBoard();
socket.emit('fill');
drawRolledDices(rollTheDicesArray());
rollTheDices();
showAvailableMoves(dicesObj);

/***/ })
/******/ ]);