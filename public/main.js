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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Notify = _exports.Notifications = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  _exports.Notifications = Notifications;
  var Notify = new Notifications();
  _exports.Notify = Notify;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_validation, _notifications) {
  "use strict";

  var socket = io.connect();
  $('.signin__button').on('click', function (event) {
    event.preventDefault();
    var userLogin = $('input[name=login]').val();
    var userPassword = $('input[name=password]').val();
    if (!_validation.validate.validation(userLogin, userPassword)) return;
    socket.emit('user_signin', {
      login: userLogin,
      password: userPassword
    });
  }); //отправляем данные с "Зарегистрироваться" на сервер

  $('.signup__button').on('click', function (event) {
    event.preventDefault();
    var userLogin = $('input[name=login]').val();
    var userPassword = $('input[name=password]').val();
    var userPasswordConfirm = $('input[name=password_correct]').val();
    var userName = $('input[name=name]').val();
    if (!_validation.validate.registerValidation(userLogin, userPassword, userPasswordConfirm, userName)) return;
    socket.emit('user_signup', {
      username: userName,
      login: userLogin,
      password: userPassword,
      correct_password: userPasswordConfirm
    });
  });
  socket.on('user_signin_notification', function (data) {
    console.log('dsds');
    if (data.val == false) _notifications.Notify.error('Неверно введён логин или пароль!');else if (data.val == true) _notifications.Notify.success('Успешно!');
  });
  socket.on('redirect', function (url) {
    window.location.href = url;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _notifications) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.validate = _exports.Validation = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Validation = /*#__PURE__*/function () {
    function Validation() {
      _classCallCheck(this, Validation);

      this.login = true;
      this.password = true;
      this.confirm_password = true;
      this.username = true;
    }

    _createClass(Validation, [{
      key: "resetFields",
      value: function resetFields() {
        var fields = _toConsumableArray(document.getElementsByTagName('input'));

        fields.forEach(function (elem) {
          elem.style.border = 0;
        });
      }
    }, {
      key: "highlightFields",
      value: function highlightFields() {
        if (!this.login) {
          var field = _toConsumableArray(document.getElementsByName('login'));

          field[0].style.border = '2px solid rgb(228, 143, 152)';
        }

        if (!this.password) {
          var _field = _toConsumableArray(document.getElementsByName('password'));

          _field[0].style.border = '2px solid rgb(228, 143, 152)';
        }

        if (!this.confirm_password) {
          var _field2 = _toConsumableArray(document.getElementsByName('password_correct'));

          _field2[0].style.border = '2px solid rgb(228, 143, 152)';
        }

        if (!this.username) {
          var _field3 = _toConsumableArray(document.getElementsByName('name'));

          _field3[0].style.border = '2px solid rgb(228, 143, 152)';
        }
      }
    }, {
      key: "validation",
      value: function validation(login_, password_) {
        this.loginValidation(login_);
        this.passwordValidation(password_);
        this.resetFields();
        this.highlightFields();
        return this.login && this.password;
      }
    }, {
      key: "registerValidation",
      value: function registerValidation(login_, password_, confirm_, username_) {
        this.loginValidation(login_);
        this.passwordValidation(password_);
        this.userNameValidation(username_);
        this.confirmPasswordValidation(password_, confirm_);
        this.resetFields();
        this.highlightFields();
        return this.login && this.password && this.username && this.confirm;
      }
    }, {
      key: "loginValidation",
      value: function loginValidation(login_) {
        if (login_.length > 255) {
          _notifications.Notify.error('Слишком длинный логин!');

          this.login = false;
          return;
        }

        if (login_ === '') {
          _notifications.Notify.error('Введите логин!');

          this.login = false;
          return;
        }

        this.login = true;
      }
    }, {
      key: "passwordValidation",
      value: function passwordValidation(password_) {
        if (password_.length > 255) {
          _notifications.Notify.error('Слишком длинный пароль!');

          this.password = false;
          return;
        }

        if (password_ === '') {
          _notifications.Notify.error('Введите пароль!');

          this.password = false;
          return;
        }

        this.password = true;
      }
    }, {
      key: "userNameValidation",
      value: function userNameValidation(username_) {
        if (username_.length > 255) {
          _notifications.Notify.error('Слишком длинное имя пользователя!');

          this.username = false;
          return;
        }

        if (username_ === '') {
          _notifications.Notify.error('Введите имя пользователя!');

          this.username = false;
          return;
        }

        this.username = true;
      }
    }, {
      key: "confirmPasswordValidation",
      value: function confirmPasswordValidation(password_, confirm_) {
        if (confirm_ === '') {
          _notifications.Notify.error('Подтвердите пароль!');

          this.confirm = false;
          return;
        }

        if (password_ !== confirm_) {
          _notifications.Notify.error('Пароли не совпадают!');

          this.confirm = false;
          return;
        }

        this.password = true;
        this.confirm_password = true;
      }
    }]);

    return Validation;
  }();

  _exports.Validation = Validation;
  var validate = new Validation();
  _exports.validate = validate;
});

/***/ })
/******/ ]);