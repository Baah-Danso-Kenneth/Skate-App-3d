"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/pages/homePage/CraftedComponent.tsx":
/*!************************************************************!*\
  !*** ./app/components/pages/homePage/CraftedComponent.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _shared_Bounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Bounded */ \"(app-pages-browser)/./app/components/shared/Bounded.tsx\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ButtonLink */ \"(app-pages-browser)/./app/components/ButtonLink.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CraftedComponent(param) {\n    let { className, heading, description, image, bgImage, fgImage, href, btnText } = param;\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Blue\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"theme\");\n        const systemTheme = window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"Dark\" : \"Light\";\n        setTheme(savedTheme || systemTheme || \"Blue\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Bounded__WEBPACK_IMPORTED_MODULE_3__.Bounded, {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theme === \"Blue\" && \"bg-texture bg-brand-blue text-white\", theme === \"Orange\" && \"bg-texture bg-gray-800 text-white\", theme === \"Navy\" && \"bg-texture bg-white text-black\", theme === \"Lime\" && \"bg-texture bg-brand-lime text-black\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    children: heading\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonLink__WEBPACK_IMPORTED_MODULE_5__.ButtonLink, {\n                    href: href,\n                    children: btnText\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: bgImage,\n                    alt: \"\",\n                    width: 150,\n                    height: 150\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: fgImage,\n                    alt: \"\",\n                    width: 150,\n                    height: 150\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CraftedComponent, \"QlXEOhdHpcOl/bp0lyO/5UTFsmQ=\");\n_c = CraftedComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraftedComponent);\nvar _c;\n$RefreshReg$(_c, \"CraftedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWVQYWdlL0NyYWZ0ZWRDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ3BCO0FBQ2dCO0FBQ1A7QUFDTTtBQUN0QjtBQWF4QixTQUFTUSxpQkFBaUIsS0FTbEI7UUFUa0IsRUFDeEJDLFNBQVMsRUFDVEMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsT0FBTyxFQUNELEdBVGtCOztJQVV4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFTO0lBRzNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixhQUFhQyxhQUFhQyxPQUFPLENBQUM7UUFDeEMsTUFBTUMsY0FBY0MsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxHQUFHLFNBQVM7UUFFekZQLFNBQVNDLGNBQWNHLGVBQWU7SUFDeEMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNsQixvREFBT0E7UUFDTkssV0FBV0YsZ0RBQUlBLENBQ2JVLFVBQVUsVUFBVSx1Q0FDcEJBLFVBQVUsWUFBWSxxQ0FDdEJBLFVBQVUsVUFBVSxrQ0FDcEJBLFVBQVUsVUFBVSx1Q0FDcEJSO2tCQUdGLDRFQUFDaUI7OzhCQUNDLDhEQUFDckIsNkNBQU9BOzhCQUFFSzs7Ozs7OzhCQUNWLDhEQUFDaUI7OEJBQUdoQjs7Ozs7OzhCQUVKLDhEQUFDTCxtREFBVUE7b0JBQUNTLE1BQU1BOzhCQUFPQzs7Ozs7OzhCQUV6Qiw4REFBQ2Isa0RBQUtBO29CQUFDeUIsS0FBS2Y7b0JBQVNnQixLQUFJO29CQUFHQyxPQUFPO29CQUFLQyxRQUFROzs7Ozs7OEJBRWhELDhEQUFDNUIsa0RBQUtBO29CQUFDeUIsS0FBS2Q7b0JBQVNlLEtBQUk7b0JBQUdDLE9BQU87b0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhEO0dBMUNTdkI7S0FBQUE7QUE0Q1QsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lUGFnZS9DcmFmdGVkQ29tcG9uZW50LnRzeD9jNGVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgQm91bmRlZCB9IGZyb20gJy4uLy4uL3NoYXJlZC9Cb3VuZGVkJztcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi9IZWFkaW5nJztcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi8uLi9CdXR0b25MaW5rJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG50eXBlIFByb3BzID0ge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgaGVhZGluZzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBidG5UZXh0OiBzdHJpbmc7XG4gIGJnSW1hZ2U6IHN0cmluZztcbiAgZmdJbWFnZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBDcmFmdGVkQ29tcG9uZW50KHtcbiAgY2xhc3NOYW1lLFxuICBoZWFkaW5nLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIGJnSW1hZ2UsXG4gIGZnSW1hZ2UsXG4gIGhyZWYsXG4gIGJ0blRleHQsXG59OiBQcm9wcykge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0JsdWUnKTsgXG5cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgY29uc3Qgc3lzdGVtVGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnRGFyaycgOiAnTGlnaHQnO1xuXG4gICAgc2V0VGhlbWUoc2F2ZWRUaGVtZSB8fCBzeXN0ZW1UaGVtZSB8fCAnQmx1ZScpOyBcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvdW5kZWRcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgdGhlbWUgPT09ICdCbHVlJyAmJiAnYmctdGV4dHVyZSBiZy1icmFuZC1ibHVlIHRleHQtd2hpdGUnLFxuICAgICAgICB0aGVtZSA9PT0gJ09yYW5nZScgJiYgJ2JnLXRleHR1cmUgYmctZ3JheS04MDAgdGV4dC13aGl0ZScsXG4gICAgICAgIHRoZW1lID09PSAnTmF2eScgJiYgJ2JnLXRleHR1cmUgYmctd2hpdGUgdGV4dC1ibGFjaycsXG4gICAgICAgIHRoZW1lID09PSAnTGltZScgJiYgJ2JnLXRleHR1cmUgYmctYnJhbmQtbGltZSB0ZXh0LWJsYWNrJyxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8SGVhZGluZz57aGVhZGluZ308L0hlYWRpbmc+XG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgPEJ1dHRvbkxpbmsgaHJlZj17aHJlZn0+e2J0blRleHR9PC9CdXR0b25MaW5rPlxuXG4gICAgICAgIDxJbWFnZSBzcmM9e2JnSW1hZ2V9IGFsdD1cIlwiIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSAvPlxuXG4gICAgICAgIDxJbWFnZSBzcmM9e2ZnSW1hZ2V9IGFsdD1cIlwiIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvQm91bmRlZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhZnRlZENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJCb3VuZGVkIiwiSGVhZGluZyIsIkJ1dHRvbkxpbmsiLCJjbHN4IiwiQ3JhZnRlZENvbXBvbmVudCIsImNsYXNzTmFtZSIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYmdJbWFnZSIsImZnSW1hZ2UiLCJocmVmIiwiYnRuVGV4dCIsInRoZW1lIiwic2V0VGhlbWUiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN5c3RlbVRoZW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzZWN0aW9uIiwicCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/pages/homePage/CraftedComponent.tsx\n"));

/***/ })

});