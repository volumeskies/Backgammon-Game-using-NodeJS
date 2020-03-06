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

  var points_top = [].slice.call(document.getElementById('points_top').children);
  var points_bottom = [].slice.call(document.getElementById('points_bottom').children).reverse();
  var points = points_bottom.concat(points_top);
  console.log(points);
  var checkers = [];
  checker = {
    current_point: 1,
    id_player: 1
  };

  for (var i = 0; i < 2; i++) {
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[0].append(checker);
  }

  for (var _i = 0; _i < 5; _i++) {
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[11].append(checker);
  }

  for (var _i2 = 0; _i2 < 3; _i2++) {
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[16].append(checker);
  }

  for (var _i3 = 0; _i3 < 5; _i3++) {
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[18].append(checker);
  }

  for (var _i4 = 0; _i4 < 2; _i4++) {
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[23].append(checker);
  }

  for (var _i5 = 0; _i5 < 5; _i5++) {
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[5].append(checker);
  }

  for (var _i6 = 0; _i6 < 3; _i6++) {
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[7].append(checker);
  }

  for (var _i7 = 0; _i7 < 5; _i7++) {
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[12].append(checker);
  }

  function show_available_moves(from, dice_1, dice_2) {
    if (con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_1], function () {})) ; //highlight

    if (con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_2], function () {})) ; //highlight

    if (con.query("CALL IS_MULTIPOINT_FREE(?, ?)", [from, dice_1 + dice_2], function () {})) ; //highlight
  }
});

/***/ })

/******/ });