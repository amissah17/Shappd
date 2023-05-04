/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/dom_loader.js":
/*!***********************************!*\
  !*** ./src/scripts/dom_loader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgColorElem\": () => (/* binding */ bgColorElem),\n/* harmony export */   \"borderRad\": () => (/* binding */ borderRad),\n/* harmony export */   \"contrlContainer\": () => (/* binding */ contrlContainer),\n/* harmony export */   \"contrlView\": () => (/* binding */ contrlView),\n/* harmony export */   \"elem\": () => (/* binding */ elem),\n/* harmony export */   \"hbLeft\": () => (/* binding */ hbLeft),\n/* harmony export */   \"hbRight\": () => (/* binding */ hbRight),\n/* harmony export */   \"htLeft\": () => (/* binding */ htLeft),\n/* harmony export */   \"htRight\": () => (/* binding */ htRight),\n/* harmony export */   \"morphToggle\": () => (/* binding */ morphToggle),\n/* harmony export */   \"morphismToggle\": () => (/* binding */ morphismToggle),\n/* harmony export */   \"radToggle\": () => (/* binding */ radToggle),\n/* harmony export */   \"radiusToggle\": () => (/* binding */ radiusToggle),\n/* harmony export */   \"shadBlur\": () => (/* binding */ shadBlur),\n/* harmony export */   \"shadColor\": () => (/* binding */ shadColor),\n/* harmony export */   \"shadX\": () => (/* binding */ shadX),\n/* harmony export */   \"shadY\": () => (/* binding */ shadY),\n/* harmony export */   \"sizeElem\": () => (/* binding */ sizeElem),\n/* harmony export */   \"slidePanel\": () => (/* binding */ slidePanel),\n/* harmony export */   \"topShadBlur\": () => (/* binding */ topShadBlur),\n/* harmony export */   \"topShadX\": () => (/* binding */ topShadX),\n/* harmony export */   \"topShadY\": () => (/* binding */ topShadY),\n/* harmony export */   \"txtArea\": () => (/* binding */ txtArea),\n/* harmony export */   \"vbLeft\": () => (/* binding */ vbLeft),\n/* harmony export */   \"vbRight\": () => (/* binding */ vbRight),\n/* harmony export */   \"vtLeft\": () => (/* binding */ vtLeft),\n/* harmony export */   \"vtRight\": () => (/* binding */ vtRight)\n/* harmony export */ });\nconst elem = document.getElementById(\"shappd_display\");\r\nconst contrlContainer= document.getElementById(\"controlContainer\");\r\nconst domObj = document.querySelectorAll(\"input\");\r\nconst radToggle = document.querySelector('#toggleContainer')\r\nconst morphToggle = document.querySelector('#topShadContainer')\r\nconst slidePanel = document.querySelector('#mobileSlidePanel')\r\nconst txtArea = document.getElementById('txtArea')\r\nconst contrlView = document.getElementById(\"control_view\");\r\n\r\nconst bgColorElem = domObj[0];\r\nconst sizeElem = domObj[1];\r\nconst borderRad = domObj[2];\r\nconst radiusToggle = domObj[3];\r\nconst htLeft = domObj[4];\r\nconst htRight = domObj[5];\r\nconst hbRight = domObj[6];\r\nconst hbLeft = domObj[7];\r\nconst vtLeft = domObj[8];\r\nconst vtRight = domObj[9];\r\nconst vbRight = domObj[10];\r\nconst vbLeft = domObj[11];\r\nconst shadX = domObj[12];\r\nconst shadY = domObj[13];\r\nconst shadBlur = domObj[14];\r\nconst shadColor = domObj[15];\r\nconst morphismToggle = domObj[16];\r\nconst topShadX = domObj[17];\r\nconst topShadY = domObj[18];\r\nconst topShadBlur = domObj[19];\r\n\r\n\r\n\n\n//# sourceURL=webpack://shappd/./src/scripts/dom_loader.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_loader.js */ \"./src/scripts/dom_loader.js\");\n\r\n\r\nvar shadowX = 14;\r\nvar shadowY = 14;\r\nvar blurShadow = 25;\r\nvar shadowColor = \"#787878\";\r\n\r\nvar topXOffset = 14;\r\nvar topYOffset = 14;\r\nvar topShadowBlur = 25;\r\nvar topShadowColor = \"#f6f6f6\";\r\n\r\nvar hor_radiusL = 50;\r\nvar hor_radiusR = 50;\r\nvar hor_radiusBL = 50;\r\nvar hor_radiusBR = 50;\r\n\r\nvar vert_radiusL = 50;\r\nvar vert_radiusR = 50;\r\nvar vert_radiusBL = 50;\r\nvar vert_radiusBR = 50;\r\n\r\nvar computedStyle;\r\n\r\n//event listener for my inputs elements\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.bgColorElem.addEventListener(\"change\", handleBgColor);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.sizeElem.addEventListener(\"change\", handleSzChange);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.borderRad.addEventListener(\"change\", handleRadius);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.radiusToggle.addEventListener(\"change\", handleRadToggler);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.htLeft.addEventListener(\"change\", handleBorderRadiusHTL);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.htRight.addEventListener(\"change\", handleBorderRadiusHTR);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.hbLeft.addEventListener(\"change\", handleBorderRadiusHBL);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.hbRight.addEventListener(\"change\", handleBorderRadiusHBR);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.vtLeft.addEventListener(\"change\", handleBorderRadiusVTL);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.vtRight.addEventListener(\"change\", handleBorderRadiusVTR);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.vbLeft.addEventListener(\"change\", handleBorderRadiusVBL);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.vbRight.addEventListener(\"change\", handleBorderRadiusVBR);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.shadBlur.addEventListener(\"change\", handleBlur);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.shadColor.addEventListener(\"change\", handleShadowColor);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.shadX.addEventListener(\"change\", handleXOffset);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.shadY.addEventListener(\"change\", handleYOffset);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.morphismToggle.addEventListener(\"change\", handleMorphToggler);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.topShadX.addEventListener(\"change\", topX);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.topShadY.addEventListener(\"change\", topY);\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.topShadBlur.addEventListener(\"change\", topBlur);\r\n// end of input element eventlisteners\r\n\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.slidePanel.addEventListener(\"click\", showPanel); //opens the control on mobile devices\r\n\r\nwindow.onload = () => {\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n\r\n  codeUpdate();\r\n};\r\n\r\nvar size;\r\nvar border_rad;\r\nvar bgd;\r\nvar box_shads;\r\n\r\nvar drawControl = false;\r\n\r\nfunction codeUpdate() {\r\ncomputedStyle = window.getComputedStyle(_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem);\r\n size = computedStyle.getPropertyValue(\"width\");\r\n border_rad = computedStyle.getPropertyValue(\"border-radius\");\r\n bgd = computedStyle.getPropertyValue(\"background-color\");\r\n box_shads = computedStyle.getPropertyValue(\"box-shadow\");\r\n\r\n _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.txtArea.innerHTML = `width: ${size} \\nheight:${size} \\nborder-radius: ${border_rad} \\nbackground-color: ${bgd} \\nbox-shadow: ${box_shads}`;\r\n}\r\n\r\nvar show = false;\r\nvar active = false;\r\n\r\nfunction showPanel() {\r\n  drawControl = !drawControl\r\n\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.contrlContainer.style.width = `${drawControl? \"90%\" : \"\"}`;\r\n  // contrlView.style.display = 'revert';\r\n}\r\n\r\nfunction handleRadToggler() {\r\n  show = !show;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.radToggle.style.display = `${show ? \"block\" : \"\"}`;\r\n}\r\n\r\nfunction handleMorphToggler() {\r\n  active = !active;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.morphToggle.style.display = `${active ? \"block\" : \"\"}`;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = `${\r\n    active\r\n      ? `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`\r\n      : ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`\r\n  }`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBgColor(e) {\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.backgroundColor = `${e.target.value}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleSzChange(e) {\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.width = `${e.target.value}px`;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.height = `${e.target.value}px`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleRadius(e) {\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderRadius = `${e.target.value}px`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleXOffset(e) {\r\n  if (active) {\r\n    handleMorphToggler();\r\n    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.morphismToggle.checked = false;\r\n   \r\n  }\r\n  shadowX = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate(); \r\n}\r\n\r\nfunction handleYOffset(e) {\r\n  if (active) {\r\n    handleMorphToggler();\r\n    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.morphismToggle.checked = false;\r\n  }\r\n  shadowY = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBlur(e) {\r\n  if (active) {\r\n    handleMorphToggler();\r\n    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.morphismToggle.checked = false;\r\n  }\r\n  blurShadow = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = `${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\nfunction handleShadowColor(e) {\r\n  shadowColor = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction topX(e) {\r\n  topXOffset = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction topY(e) {\r\n  topYOffset = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction topBlur(e) {\r\n  topShadowBlur = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBorderRadiusHTR(e) {\r\n  hor_radiusR = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderTopRightRadius = `${hor_radiusR}px ${vert_radiusR}px`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBorderRadiusHTL(e) {\r\n  hor_radiusL = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderTopLeftRadius = `${hor_radiusL}px ${vert_radiusL}px`;\r\n  codeUpdate();\r\n}\r\nfunction handleBorderRadiusHBR(e) {\r\n  hor_radiusBR = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderBottomRightRadius = `${hor_radiusBR}px ${vert_radiusBR}px`;\r\n  codeUpdate();\r\n}\r\nfunction handleBorderRadiusHBL(e) {\r\n  hor_radiusBL = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderBottomLeftRadius = `${hor_radiusBL}px ${vert_radiusBL}px`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBorderRadiusVTR(e) {\r\n  vert_radiusR = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderTopRightRadius = `${hor_radiusR}px ${vert_radiusR}px`;\r\n  codeUpdate();\r\n}\r\n\r\nfunction handleBorderRadiusVTL(e) {\r\n  vert_radiusL = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderTopLeftRadius = `${hor_radiusL}px ${vert_radiusL}px`;\r\n  codeUpdate();\r\n}\r\nfunction handleBorderRadiusVBR(e) {\r\n  vert_radiusBR = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderBottomRightRadius = `${hor_radiusBR}px ${vert_radiusBR}px`;\r\n  codeUpdate();\r\n}\r\nfunction handleBorderRadiusVBL(e) {\r\n  vert_radiusBL = e.target.value;\r\n  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.elem.style.borderBottomLeftRadius = `${hor_radiusBL}px ${vert_radiusBL}px`;\r\n  codeUpdate();\r\n}\r\n\n\n//# sourceURL=webpack://shappd/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;