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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/profile.js":
/*!****************************!*\
  !*** ./src/app/profile.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_profile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/profile.scss */ "./src/style/profile.scss");
/* harmony import */ var _style_profile_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_profile_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/js/main.js */ "./src/public/js/main.js");
/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_1__);





//profile content swap
const personal = document.querySelector(".headline__personal");
const account = document.querySelector(".headline__account");
const user__personal = document.querySelector(".user__personal");
const user__account = document.querySelector(".user__account");
const underline__personal = document.querySelector(".underline__personal");
const underline__account = document.querySelector(".underline__account");
// On click
personal.addEventListener("click", function () {
    // Toggle class "is-active"
    if(user__account.classList.contains("account-active")){
        user__account.classList.remove("account-active");
        user__personal.classList.add("personal-active");
        if(!personal.classList.contains("headline__active")){
            personal.classList.add("headline__active");
            account.classList.add("headline__nonact");
            underline__personal.classList.add("underline__active");
            underline__account.classList.add("underline__nonact");

            personal.classList.remove("headline__nonact");
            account.classList.remove("headline__active");
            underline__personal.classList.remove("underline__nonact");
            underline__account.classList.remove("underline__active");
        }
    }
});
account.addEventListener("click", function () {
    // Toggle class "is-active"
    if (user__personal.classList.contains("personal-active")) {
        user__personal.classList.remove("personal-active");
        user__account.classList.add("account-active");
        if (!account.classList.contains("headline__active")) {
            account.classList.add("headline__active");
            personal.classList.add("headline__nonact");
            underline__account.classList.add("underline__active");
            underline__personal.classList.add("underline__nonact");

            account.classList.remove("headline__nonact");
            personal.classList.remove("headline__active");
            underline__account.classList.remove("underline__nonact");
            underline__personal.classList.remove("underline__active");
        }
    }
});

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".sidebar");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    bar.classList.toggle("active");
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});

/***/ }),

/***/ "./src/style/profile.scss":
/*!********************************!*\
  !*** ./src/style/profile.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvcHJvZmlsZS5zY3NzPzIzOTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0Q7Ozs7QUFJOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDaEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUNURCx1QyIsImZpbGUiOiJidW5kbGVzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAvcHJvZmlsZS5qc1wiKTtcbiIsImltcG9ydCAnLi4vc3R5bGUvcHJvZmlsZS5zY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvanMvbWFpbi5qcyc7XHJcblxyXG5cclxuXHJcbi8vcHJvZmlsZSBjb250ZW50IHN3YXBcclxuY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRsaW5lX19wZXJzb25hbFwiKTtcclxuY29uc3QgYWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGxpbmVfX2FjY291bnRcIik7XHJcbmNvbnN0IHVzZXJfX3BlcnNvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyX19wZXJzb25hbFwiKTtcclxuY29uc3QgdXNlcl9fYWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fYWNjb3VudFwiKTtcclxuY29uc3QgdW5kZXJsaW5lX19wZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5kZXJsaW5lX19wZXJzb25hbFwiKTtcclxuY29uc3QgdW5kZXJsaW5lX19hY2NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bmRlcmxpbmVfX2FjY291bnRcIik7XHJcbi8vIE9uIGNsaWNrXHJcbnBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUb2dnbGUgY2xhc3MgXCJpcy1hY3RpdmVcIlxyXG4gICAgaWYodXNlcl9fYWNjb3VudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY2NvdW50LWFjdGl2ZVwiKSl7XHJcbiAgICAgICAgdXNlcl9fYWNjb3VudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWNjb3VudC1hY3RpdmVcIik7XHJcbiAgICAgICAgdXNlcl9fcGVyc29uYWwuY2xhc3NMaXN0LmFkZChcInBlcnNvbmFsLWFjdGl2ZVwiKTtcclxuICAgICAgICBpZighcGVyc29uYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGxpbmVfX2FjdGl2ZVwiKSl7XHJcbiAgICAgICAgICAgIHBlcnNvbmFsLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZV9fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBhY2NvdW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZV9fbm9uYWN0XCIpO1xyXG4gICAgICAgICAgICB1bmRlcmxpbmVfX3BlcnNvbmFsLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVfX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdW5kZXJsaW5lX19hY2NvdW50LmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVfX25vbmFjdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHBlcnNvbmFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkbGluZV9fbm9uYWN0XCIpO1xyXG4gICAgICAgICAgICBhY2NvdW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkbGluZV9fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB1bmRlcmxpbmVfX3BlcnNvbmFsLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmRlcmxpbmVfX25vbmFjdFwiKTtcclxuICAgICAgICAgICAgdW5kZXJsaW5lX19hY2NvdW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmRlcmxpbmVfX2FjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5hY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUb2dnbGUgY2xhc3MgXCJpcy1hY3RpdmVcIlxyXG4gICAgaWYgKHVzZXJfX3BlcnNvbmFsLmNsYXNzTGlzdC5jb250YWlucyhcInBlcnNvbmFsLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIHVzZXJfX3BlcnNvbmFsLmNsYXNzTGlzdC5yZW1vdmUoXCJwZXJzb25hbC1hY3RpdmVcIik7XHJcbiAgICAgICAgdXNlcl9fYWNjb3VudC5jbGFzc0xpc3QuYWRkKFwiYWNjb3VudC1hY3RpdmVcIik7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50LmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRsaW5lX19hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgYWNjb3VudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmVfX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgcGVyc29uYWwuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lX19ub25hY3RcIik7XHJcbiAgICAgICAgICAgIHVuZGVybGluZV9fYWNjb3VudC5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lX19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHVuZGVybGluZV9fcGVyc29uYWwuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZV9fbm9uYWN0XCIpO1xyXG5cclxuICAgICAgICAgICAgYWNjb3VudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGxpbmVfX25vbmFjdFwiKTtcclxuICAgICAgICAgICAgcGVyc29uYWwuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRsaW5lX19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHVuZGVybGluZV9fYWNjb3VudC5jbGFzc0xpc3QucmVtb3ZlKFwidW5kZXJsaW5lX19ub25hY3RcIik7XHJcbiAgICAgICAgICAgIHVuZGVybGluZV9fcGVyc29uYWwuY2xhc3NMaXN0LnJlbW92ZShcInVuZGVybGluZV9fYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiLy8gTG9vayBmb3IgLmhhbWJ1cmdlclxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG4vLyBPbiBjbGlja1xyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRvZ2dsZSBjbGFzcyBcImlzLWFjdGl2ZVwiXHJcbiAgICBiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIGVsc2UsIGxpa2Ugb3Blbi9jbG9zZSBtZW51XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=