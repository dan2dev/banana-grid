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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_ts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_ts__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// maybe your should remove the C and put b: 6gd and
var widthScreenSizes = [
    { width: 0, letter: "banana-grid" },
    { width: 576, letter: "x" },
    { width: 960, letter: "xx" },
    { width: (1152), letter: "xxx" },
];
var BananaGrid;
(function (BananaGrid) {
    var loaded = false;
    var timer;
    var currentLetters = [];
    function set(letter) {
        if (currentLetters.indexOf(letter) === -1) {
            currentLetters.push(letter);
        }
        document.body.classList.add(letter);
    }
    function unset(letter) {
        var index = currentLetters.indexOf(letter);
        if (index > -1) {
            currentLetters.splice(index, 1);
        }
        document.body.classList.remove(letter);
    }
    function render() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        widthScreenSizes.forEach(function (size) {
            if (size.width <= width) {
                set(size.letter);
            }
            else {
                unset(size.letter);
            }
            document.body.style.width = width + "px";
            document.body.style.minHeight = window.innerHeight + "px";
        });
    }
    function resizeChange(e) {
        clearTimeout(timer);
        timer = setTimeout(render, 150);
    }
    function init() {
        if (loaded === false && document.body !== undefined && document.body !== null) {
            loaded = true;
            window.addEventListener("resize", resizeChange);
            window.addEventListener("orientationchange", function () {
                document.body.style.width = "100vw";
            }, false);
            document.body.classList.add("banana-grid");
            render();
        }
        else {
            setTimeout(init, 50);
        }
    }
    init();
})(BananaGrid || (BananaGrid = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=grid.js.map