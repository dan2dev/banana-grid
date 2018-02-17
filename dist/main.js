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
/***/ (function(module, exports) {

// import "./main.scss";
// maybe your should remove the C and put b: 6gd and
const widthScreenSizes = [
    { width: 0, letter: "s" },
    { width: 576, letter: "x" },
    { width: 960, letter: "xx" },
    { width: (1152), letter: "xxx" },
];
var BananaGrid;
(function (BananaGrid) {
    let loaded = false;
    let timer;
    const currentLetters = [];
    function set(letter) {
        if (currentLetters.indexOf(letter) === -1) {
            currentLetters.push(letter);
        }
        document.body.classList.add(letter);
    }
    function unset(letter) {
        const index = currentLetters.indexOf(letter);
        if (index > -1) {
            currentLetters.splice(index, 1);
        }
        document.body.classList.remove(letter);
    }
    function render() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        widthScreenSizes.forEach((size) => {
            if (size.width <= width) {
                set(size.letter);
            }
            else {
                unset(size.letter);
            }
            document.body.style.visibility = "hidden";
            requestAnimationFrame(() => {
                document.body.style.width = width + "px";
                document.body.style.minHeight = height + "px";
                document.body.style.visibility = "";
            });
            // requestAnimationFrame(() => {
            // 	document.body.style.visibility = "hidden";
            // 	document.body.style.width = "100vw";
            // 	// document.body.style.height = "100vh";
            // 	document.body.style.minHeight = "100vh";
            // });
            // setTimeout(() => {
            // 	requestAnimationFrame(() => {
            // 		document.body.style.width = width + "px";
            // 		document.body.style.minHeight = "100vh";
            // 		document.body.style.visibility = "";
            // 	});
            // }, 100);
        });
    }
    function resizeChange(e) {
        clearTimeout(timer);
        timer = setTimeout(render, 100);
    }
    function init() {
        if (loaded === false && document.body !== undefined && document.body !== null) {
            loaded = true;
            window.addEventListener("resize", resizeChange);
            window.addEventListener("orientationchange", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGEwMWFiMTYzZTFiNWI1OTA4ZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHdCQUF3QjtBQU14QixvREFBb0Q7QUFDcEQsTUFBTSxnQkFBZ0IsR0FBdUI7SUFDNUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDM0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDNUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0NBQ2hDLENBQUM7QUFDRixJQUFVLFVBQVUsQ0FpRW5CO0FBakVELFdBQVUsVUFBVTtJQUNuQixJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUM7SUFDNUIsSUFBSSxLQUFtQixDQUFDO0lBQ3hCLE1BQU0sY0FBYyxHQUFhLEVBQUUsQ0FBQztJQUNwQyxhQUFhLE1BQWM7UUFDMUIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxN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QUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDRixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUM7QUFDUixDQUFDLEVBakVTLFVBQVUsS0FBVixVQUFVLFFBaUVuQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGEwMWFiMTYzZTFiNWI1OTA4ZmUiLCIvLyBpbXBvcnQgXCIuL21haW4uc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElXaWR0aFNjcmVlblNpemUge1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblx0bGV0dGVyOiBzdHJpbmc7XHJcbn1cclxuLy8gbWF5YmUgeW91ciBzaG91bGQgcmVtb3ZlIHRoZSBDIGFuZCBwdXQgYjogNmdkIGFuZFxyXG5jb25zdCB3aWR0aFNjcmVlblNpemVzOiBJV2lkdGhTY3JlZW5TaXplW10gPSBbXHJcblx0eyB3aWR0aDogMCwgbGV0dGVyOiBcInNcIiB9LCAvLyAwXHJcblx0eyB3aWR0aDogNTc2LCBsZXR0ZXI6IFwieFwiIH0sIC8vIDZnZFx0XHRcdFx0XHR4XHJcblx0eyB3aWR0aDogOTYwLCBsZXR0ZXI6IFwieHhcIiB9LCAvLyAxMGdkXHRcdFx0XHR4eFxyXG5cdHsgd2lkdGg6ICgxMTUyKSwgbGV0dGVyOiBcInh4eFwiIH0sIC8vIDExNTIgLyAxMmdkXHRcdHh4eFxyXG5dO1xyXG5uYW1lc3BhY2UgQmFuYW5hR3JpZCB7XHJcblx0bGV0IGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGxldCB0aW1lcjogbnVtYmVyIHwgYW55O1xyXG5cdGNvbnN0IGN1cnJlbnRMZXR0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdGZ1bmN0aW9uIHNldChsZXR0ZXI6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKGN1cnJlbnRMZXR0ZXJzLmluZGV4T2YobGV0dGVyKSA9PT0gLTEpIHtcclxuXHRcdFx0Y3VycmVudExldHRlcnMucHVzaChsZXR0ZXIpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGxldHRlcik7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHVuc2V0KGxldHRlcjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gY3VycmVudExldHRlcnMuaW5kZXhPZihsZXR0ZXIpO1xyXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0Y3VycmVudExldHRlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShsZXR0ZXIpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XHJcblx0XHRjb25zdCB3aWR0aDogbnVtYmVyID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdHdpZHRoU2NyZWVuU2l6ZXMuZm9yRWFjaCgoc2l6ZSkgPT4ge1xyXG5cdFx0XHRpZiAoc2l6ZS53aWR0aCA8PSB3aWR0aCkge1xyXG5cdFx0XHRcdHNldChzaXplLmxldHRlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5zZXQoc2l6ZS5sZXR0ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHQvLyBcdGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdC8vIFx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcclxuXHRcdFx0Ly8gXHQvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcclxuXHRcdFx0Ly8gXHRkb2N1bWVudC5ib2R5LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcclxuXHRcdFx0Ly8gfSk7XHJcblx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQvLyBcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdC8vIFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcblx0XHRcdC8vIFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcclxuXHRcdFx0Ly8gXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XHJcblx0XHRcdC8vIFx0fSk7XHJcblx0XHRcdC8vIH0sIDEwMCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gcmVzaXplQ2hhbmdlKGU6IFVJRXZlbnQpOiB2b2lkIHtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcblx0XHR0aW1lciA9IHNldFRpbWVvdXQocmVuZGVyLCAxMDApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xyXG5cdFx0aWYgKGxvYWRlZCA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYm9keSAhPT0gdW5kZWZpbmVkICYmIGRvY3VtZW50LmJvZHkgIT09IG51bGwpIHtcclxuXHRcdFx0bG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2hhbmdlKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcclxuXHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiYW5hbmEtZ3JpZFwiKTtcclxuXHRcdFx0cmVuZGVyKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRUaW1lb3V0KGluaXQsIDUwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aW5pdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==