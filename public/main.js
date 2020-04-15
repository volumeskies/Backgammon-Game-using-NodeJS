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
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/notifications.js
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
// CONCATENATED MODULE: ./src/validation.js
function validation_toConsumableArray(arr) { return validation_arrayWithoutHoles(arr) || validation_iterableToArray(arr) || validation_unsupportedIterableToArray(arr) || validation_nonIterableSpread(); }

function validation_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function validation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validation_arrayLikeToArray(o, minLen); }

function validation_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function validation_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return validation_arrayLikeToArray(arr); }

function validation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function validation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validation_createClass(Constructor, protoProps, staticProps) { if (protoProps) validation_defineProperties(Constructor.prototype, protoProps); if (staticProps) validation_defineProperties(Constructor, staticProps); return Constructor; }


var validation_Validation = /*#__PURE__*/function () {
  function Validation() {
    validation_classCallCheck(this, Validation);

    this.login = true;
    this.password = true;
    this.confirm_password = true;
    this.username = true;
  }

  validation_createClass(Validation, [{
    key: "resetFields",
    value: function resetFields() {
      var fields = validation_toConsumableArray(document.getElementsByTagName('input'));

      fields.forEach(function (elem) {
        elem.style.border = 0;
      });
    }
  }, {
    key: "highlightFields",
    value: function highlightFields() {
      if (!this.login) {
        var field = validation_toConsumableArray(document.getElementsByName('login'));

        field[0].style.border = '2px solid rgb(228, 143, 152)';
      }

      if (!this.password) {
        var _field = validation_toConsumableArray(document.getElementsByName('password'));

        _field[0].style.border = '2px solid rgb(228, 143, 152)';
      }

      if (!this.confirm_password) {
        var _field2 = validation_toConsumableArray(document.getElementsByName('password_correct'));

        _field2[0].style.border = '2px solid rgb(228, 143, 152)';
      }

      if (!this.username) {
        var _field3 = validation_toConsumableArray(document.getElementsByName('name'));

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
      return this.login && this.password && this.username && this.confirm_password;
    }
  }, {
    key: "loginValidation",
    value: function loginValidation(login_) {
      if (login_.length > 255) {
        Notify.error('Слишком длинный логин!');
        this.login = false;
        return;
      }

      if (login_ === '') {
        Notify.error('Введите логин!');
        this.login = false;
        return;
      }

      this.login = true;
    }
  }, {
    key: "passwordValidation",
    value: function passwordValidation(password_) {
      if (password_.length > 255) {
        Notify.error('Слишком длинный пароль!');
        this.password = false;
        return;
      }

      if (password_ === '') {
        Notify.error('Введите пароль!');
        this.password = false;
        return;
      }

      this.password = true;
    }
  }, {
    key: "userNameValidation",
    value: function userNameValidation(username_) {
      if (username_.length > 255) {
        Notify.error('Слишком длинное имя пользователя!');
        this.username = false;
        return;
      }

      if (username_ === '') {
        Notify.error('Введите имя пользователя!');
        this.username = false;
        return;
      }

      this.username = true;
    }
  }, {
    key: "confirmPasswordValidation",
    value: function confirmPasswordValidation(password_, confirm_) {
      if (confirm_ === '') {
        Notify.error('Подтвердите пароль!');
        this.confirm = false;
        return;
      }

      if (password_ !== confirm_) {
        Notify.error('Пароли не совпадают!');
        this.confirm = false;
        return;
      }

      this.password = true;
      this.confirm_password = true;
    }
  }]);

  return Validation;
}();
var validate = new validation_Validation();
// CONCATENATED MODULE: ./src/confirm.js
function confirm_toConsumableArray(arr) { return confirm_arrayWithoutHoles(arr) || confirm_iterableToArray(arr) || confirm_unsupportedIterableToArray(arr) || confirm_nonIterableSpread(); }

function confirm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function confirm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return confirm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return confirm_arrayLikeToArray(o, minLen); }

function confirm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function confirm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return confirm_arrayLikeToArray(arr); }

function confirm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function confirm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function confirm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function confirm_createClass(Constructor, protoProps, staticProps) { if (protoProps) confirm_defineProperties(Constructor.prototype, protoProps); if (staticProps) confirm_defineProperties(Constructor, staticProps); return Constructor; }

var ConfirmModal = /*#__PURE__*/function () {
  function ConfirmModal() {
    confirm_classCallCheck(this, ConfirmModal);

    this.acceptButton = '';
    this.declineButton = '';
  }

  confirm_createClass(ConfirmModal, [{
    key: "render",
    value: function render(data) {
      var modal = document.createElement('div');
      modal.className = 'elements modal';

      var container = confirm_toConsumableArray(document.getElementsByClassName('confirm'));

      container[0].className = container[0].className.replace(/\bhide\b/ig, '');
      container[0].appendChild(modal);
      modal.innerHTML = "<span>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 \u0438\u0433\u0440\u0443 \u043E\u0442: ".concat(data.login_1, "</span>");
      var acceptButton = document.createElement('button');
      acceptButton.className = 'confirm__accept-button';
      acceptButton.textContent = 'Принять';
      var declineButton = document.createElement('button');
      declineButton.className = 'confirm__decline-button';
      declineButton.textContent = 'Отклонить';
      modal.appendChild(acceptButton);
      modal.appendChild(declineButton);
      this.acceptButton = acceptButton;
      this.declineButton = declineButton;
    }
  }, {
    key: "accept",
    value: function accept(callback) {
      acceptButton.addEventListener('click', function (event) {
        event.preventDefault();
        callback();
      });
    }
  }, {
    key: "decline",
    value: function decline(callback) {
      declineButton.addEventListener('click', function (event) {
        event.preventDefault();
        callback();
      });
    }
  }]);

  return ConfirmModal;
}();
var Confirm = new ConfirmModal();
// CONCATENATED MODULE: ./src/client.js



var socket = io.connect();
$('.signin__button').on('click', function (event) {
  event.preventDefault();
  var userLogin = $('input[name=login]').val();
  var userPassword = $('input[name=password]').val();
  if (!validate.validation(userLogin, userPassword)) return;
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
  if (!validate.registerValidation(userLogin, userPassword, userPasswordConfirm, userName)) return;
  socket.emit('user_signup', {
    username: userName,
    login: userLogin,
    password: userPassword,
    correct_password: userPasswordConfirm
  });
});
socket.on('user_signin_notification', function (data) {
  console.log('dsds');
  if (data.val == false) Notify.error('Неверно введён логин или пароль!');else if (data.val == true) Notify.success('Успешно!');
});
socket.on('user_signup_notification', function (data) {
  console.log('dsds');
  if (data.val == false) Notify.error('Ошибка!');else if (data.val == true) Notify.success('Успешно!');
});
socket.on('redirect', function (url) {
  window.location.href = url;
});
socket.on('invitation', function (data) {
  console.log(data);
  Confirm.render(data);
  $('.confirm__accept-button').on('click', function (event) {
    event.preventDefault();
    socket.emit('confirmation', {
      login_1: data['login_1'],
      login_2: data['login_2'],
      confirmation: true
    });
  });
  $('.confirm__decline-button').on('click', function (event) {
    event.preventDefault();
    socket.emit('confirmation', {
      login_1: data['login_1'],
      login_2: data['login_2'],
      confirmation: false
    });
  });
});
$('.invite__button').on('click', function (event) {
  event.preventDefault();
  var inviteLogin = $('input[name=login]').val();
  socket.emit('invite', {
    login: inviteLogin
  });
});

/***/ })
/******/ ]);