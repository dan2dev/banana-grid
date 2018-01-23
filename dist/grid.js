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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjI5MDg4ZTdkZjFhYjQ1ZTJiY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz8zN2E1Iiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEcUI7QUFDRjs7Ozs7OztBQ0RuQix5Qzs7Ozs7O0FDSUEsb0RBQW9EO0FBQ3BELElBQU0sZ0JBQWdCLEdBQXVCO0lBQzVDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO0lBQ25DLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtDQUNoQyxDQUFDO0FBQ0YsSUFBVSxVQUFVLENBZ0RuQjtBQWhERCxXQUFVLFVBQVU7SUFDbkIsSUFBSSxNQUFNLEdBQVksS0FBSyxDQUFDO0lBQzVCLElBQUksS0FBbUIsQ0FBQztJQUN4QixJQUFJLGNBQWMsR0FBYSxFQUFFLENBQUM7SUFDbEMsYUFBYSxNQUFjO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZUFBZSxNQUFjO1FBQzVCLElBQU0sS0FBSyxHQUFXLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRDtRQUNDLElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsY0FBSTtZQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxzQkFBc0IsQ0FBVTtRQUMvQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNEO1FBQ0MsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0UsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFO2dCQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQyxNQUFNLEVBQUUsQ0FBQztRQUNWLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNGLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNSLENBQUMsRUFoRFMsVUFBVSxLQUFWLFVBQVUsUUFnRG5CIiwiZmlsZSI6ImdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MjkwODhlN2RmMWFiNDVlMmJjZSIsImltcG9ydCBcIi4vbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vbWFpbi50c1wiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ncmlkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW50ZXJmYWNlIElXaWR0aFNjcmVlblNpemUge1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblx0bGV0dGVyOiBzdHJpbmc7XHJcbn1cclxuLy8gbWF5YmUgeW91ciBzaG91bGQgcmVtb3ZlIHRoZSBDIGFuZCBwdXQgYjogNmdkIGFuZFxyXG5jb25zdCB3aWR0aFNjcmVlblNpemVzOiBJV2lkdGhTY3JlZW5TaXplW10gPSBbXHJcblx0eyB3aWR0aDogMCwgbGV0dGVyOiBcImJhbmFuYS1ncmlkXCIgfSwgLy8gMFxyXG5cdHsgd2lkdGg6IDU3NiwgbGV0dGVyOiBcInhcIiB9LCAvLyA2Z2RcdFx0XHRcdFx0eFxyXG5cdHsgd2lkdGg6IDk2MCwgbGV0dGVyOiBcInh4XCIgfSwgLy8gMTBnZFx0XHRcdFx0eHhcclxuXHR7IHdpZHRoOiAoMTE1MiksIGxldHRlcjogXCJ4eHhcIiB9LCAvLyAxMTUyIC8gMTJnZFx0XHR4eHhcclxuXTtcclxubmFtZXNwYWNlIEJhbmFuYUdyaWQge1xyXG5cdGxldCBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRsZXQgdGltZXI6IG51bWJlciB8IGFueTtcclxuXHRsZXQgY3VycmVudExldHRlcnM6IHN0cmluZ1tdID0gW107XHJcblx0ZnVuY3Rpb24gc2V0KGxldHRlcjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoY3VycmVudExldHRlcnMuaW5kZXhPZihsZXR0ZXIpID09PSAtMSkge1xyXG5cdFx0XHRjdXJyZW50TGV0dGVycy5wdXNoKGxldHRlcik7XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobGV0dGVyKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gdW5zZXQobGV0dGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSBjdXJyZW50TGV0dGVycy5pbmRleE9mKGxldHRlcik7XHJcblx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRjdXJyZW50TGV0dGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGxldHRlcik7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHJlbmRlcigpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHdpZHRoOiBudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNvbnN0IGhlaWdodDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0d2lkdGhTY3JlZW5TaXplcy5mb3JFYWNoKHNpemUgPT4ge1xyXG5cdFx0XHRpZiAoc2l6ZS53aWR0aCA8PSB3aWR0aCkge1xyXG5cdFx0XHRcdHNldChzaXplLmxldHRlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5zZXQoc2l6ZS5sZXR0ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5taW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gcmVzaXplQ2hhbmdlKGU6IFVJRXZlbnQpOiB2b2lkIHtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcblx0XHR0aW1lciA9IHNldFRpbWVvdXQocmVuZGVyLCAxNTApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xyXG5cdFx0aWYgKGxvYWRlZCA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYm9keSAhPT0gdW5kZWZpbmVkICYmIGRvY3VtZW50LmJvZHkgIT09IG51bGwpIHtcclxuXHRcdFx0bG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2hhbmdlKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcclxuXHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiYW5hbmEtZ3JpZFwiKTtcclxuXHRcdFx0cmVuZGVyKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRUaW1lb3V0KGluaXQsIDUwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aW5pdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiXSwic291cmNlUm9vdCI6IiJ9