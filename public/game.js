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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var pointsTop = _toConsumableArray(document.getElementById('points_top').children);

  var pointsBottom = _toConsumableArray(document.getElementById('points_bottom').children).reverse();

  var points = pointsBottom.concat(pointsTop);

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

  function showAvMovesDatabase(from, dice_1, dice_2) {
    if (con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_1], function () {})) ; //highlight

    if (con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_2], function () {})) ; //highlight

    if (con.query("CALL IS_MULTIPOINT_FREE(?, ?)", [from, dice_1 + dice_2], function () {})) ; //highlight
  }

  function showAvailableMoves(node, rolledDices) {
    node.addEventListener('click', function () {
      showAvMovesDatabase(node.parentNode, rolledDices[0], rolledDices[1]);
    });
  }

  function randNumber() {
    var rand = 1 + Math.random() * 6;
    return Math.floor(rand);
  }

  function rollTheDices() {
    var dices = [randNumber(), randNumber()];
    return dices;
  }

  function drawRolledDices(rolledDices) {
    var container = _toConsumableArray(document.getElementsByClassName('dices'));

    console.log(container);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = rolledDices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
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
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function clearDiceContainer(container) {
    var children = _toConsumableArray(container.childNodes);

    console.log(children);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var child = _step2.value;
        if (child.tagName == 'H2') continue;
        container.removeChild(child);
        console.log(container);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  fillTheBoard();

  var checkers = _toConsumableArray(document.getElementsByClassName('checker'));

  console.log(checkers[0].parentNode);
  var dices = rollTheDices();
  console.log(dices);
  drawRolledDices(dices);

  var container = _toConsumableArray(document.getElementsByClassName('dices'));

  console.log(container);
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var elem = _step3.value;
      elem.addEventListener('click', function () {
        event.preventDefault();
        dices = rollTheDices();
        clearDiceContainer(elem);
        drawRolledDices(dices);
      });
    };

    for (var _iterator3 = container[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});

/***/ })

/******/ });