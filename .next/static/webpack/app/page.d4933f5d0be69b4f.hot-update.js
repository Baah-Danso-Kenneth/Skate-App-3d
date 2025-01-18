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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _shared_Bounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Bounded */ \"(app-pages-browser)/./app/components/shared/Bounded.tsx\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ButtonLink */ \"(app-pages-browser)/./app/components/ButtonLink.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CraftedComponent(param) {\n    let { className, heading, description, image, bgImage, fgImage, href, btnText } = param;\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Blue\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"theme\");\n        const systemTheme = window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"Dark\" : \"Light\";\n        setTheme(savedTheme || systemTheme || \"Blue\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Bounded__WEBPACK_IMPORTED_MODULE_3__.Bounded, {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theme === \"Blue\" && \"bg-texture bg-brand-blue text-white\", theme === \"Orange\" && \"bg-texture bg-brand-orange text-white\", theme === \"Navy\" && \"bg-texture bg-brand-navy text-white\", theme === \"Lime\" && \"bg-texture bg-brand-lime\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    as: \"h2\",\n                    children: heading\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonLink__WEBPACK_IMPORTED_MODULE_5__.ButtonLink, {\n                    href: href,\n                    children: btnText\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: bgImage,\n                    alt: \"\",\n                    width: 500,\n                    height: 150\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: fgImage,\n                    alt: \"\",\n                    width: 300,\n                    height: 150\n                }, void 0, false, {\n                    fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/gee/bread/3d/Skate-App-3d/app/components/pages/homePage/CraftedComponent.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CraftedComponent, \"QlXEOhdHpcOl/bp0lyO/5UTFsmQ=\");\n_c = CraftedComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraftedComponent);\nvar _c;\n$RefreshReg$(_c, \"CraftedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWVQYWdlL0NyYWZ0ZWRDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ3BCO0FBQ2dCO0FBQ1A7QUFDTTtBQUN0QjtBQWF4QixTQUFTUSxpQkFBaUIsS0FTbEI7UUFUa0IsRUFDeEJDLFNBQVMsRUFDVEMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsT0FBTyxFQUNELEdBVGtCOztJQVV4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFTO0lBRzNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixhQUFhQyxhQUFhQyxPQUFPLENBQUM7UUFDeEMsTUFBTUMsY0FBY0MsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxHQUFHLFNBQVM7UUFFekZQLFNBQVNDLGNBQWNHLGVBQWU7SUFDeEMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNsQixvREFBT0E7UUFDTkssV0FBV0YsZ0RBQUlBLENBQ2JVLFVBQVUsVUFBVSx1Q0FDcEJBLFVBQVUsWUFBWSx5Q0FDdEJBLFVBQVUsVUFBVSx1Q0FDcEJBLFVBQVUsVUFBVSw0QkFDcEJSO2tCQUdGLDRFQUFDaUI7OzhCQUNDLDhEQUFDckIsNkNBQU9BO29CQUFDc0IsSUFBRzs4QkFBTWpCOzs7Ozs7OEJBRWxCLDhEQUFDa0I7OEJBQUdqQjs7Ozs7OzhCQUVKLDhEQUFDTCxtREFBVUE7b0JBQUNTLE1BQU1BOzhCQUFPQzs7Ozs7OzhCQUV6Qiw4REFBQ2Isa0RBQUtBO29CQUFDMEIsS0FBS2hCO29CQUFTaUIsS0FBSTtvQkFBR0MsT0FBTztvQkFBS0MsUUFBUTs7Ozs7OzhCQUVoRCw4REFBQzdCLGtEQUFLQTtvQkFBQzBCLEtBQUtmO29CQUFTZ0IsS0FBSTtvQkFBR0MsT0FBTztvQkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7R0EzQ1N4QjtLQUFBQTtBQTZDVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWVQYWdlL0NyYWZ0ZWRDb21wb25lbnQudHN4P2M0ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBCb3VuZGVkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0JvdW5kZWQnO1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL0hlYWRpbmcnO1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uLy4uL0J1dHRvbkxpbmsnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGJ0blRleHQ6IHN0cmluZztcbiAgYmdJbWFnZTogc3RyaW5nO1xuICBmZ0ltYWdlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIENyYWZ0ZWRDb21wb25lbnQoe1xuICBjbGFzc05hbWUsXG4gIGhlYWRpbmcsXG4gIGRlc2NyaXB0aW9uLFxuICBpbWFnZSxcbiAgYmdJbWFnZSxcbiAgZmdJbWFnZSxcbiAgaHJlZixcbiAgYnRuVGV4dCxcbn06IFByb3BzKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGU8c3RyaW5nPignQmx1ZScpOyBcblxuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICBjb25zdCBzeXN0ZW1UaGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyA/ICdEYXJrJyA6ICdMaWdodCc7XG5cbiAgICBzZXRUaGVtZShzYXZlZFRoZW1lIHx8IHN5c3RlbVRoZW1lIHx8ICdCbHVlJyk7IFxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm91bmRlZFxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICB0aGVtZSA9PT0gJ0JsdWUnICYmICdiZy10ZXh0dXJlIGJnLWJyYW5kLWJsdWUgdGV4dC13aGl0ZScsXG4gICAgICAgIHRoZW1lID09PSAnT3JhbmdlJyAmJiAnYmctdGV4dHVyZSBiZy1icmFuZC1vcmFuZ2UgdGV4dC13aGl0ZScsXG4gICAgICAgIHRoZW1lID09PSAnTmF2eScgJiYgJ2JnLXRleHR1cmUgYmctYnJhbmQtbmF2eSB0ZXh0LXdoaXRlJyxcbiAgICAgICAgdGhlbWUgPT09ICdMaW1lJyAmJiAnYmctdGV4dHVyZSBiZy1icmFuZC1saW1lJyxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8SGVhZGluZyBhcz0naDInPntoZWFkaW5nfTwvSGVhZGluZz5cblxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgIDxCdXR0b25MaW5rIGhyZWY9e2hyZWZ9PntidG5UZXh0fTwvQnV0dG9uTGluaz5cblxuICAgICAgICA8SW1hZ2Ugc3JjPXtiZ0ltYWdlfSBhbHQ9XCJcIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezE1MH0gLz5cblxuICAgICAgICA8SW1hZ2Ugc3JjPXtmZ0ltYWdlfSBhbHQ9XCJcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezE1MH0gLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0JvdW5kZWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyYWZ0ZWRDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQm91bmRlZCIsIkhlYWRpbmciLCJCdXR0b25MaW5rIiwiY2xzeCIsIkNyYWZ0ZWRDb21wb25lbnQiLCJjbGFzc05hbWUiLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImJnSW1hZ2UiLCJmZ0ltYWdlIiwiaHJlZiIsImJ0blRleHQiLCJ0aGVtZSIsInNldFRoZW1lIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzeXN0ZW1UaGVtZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2VjdGlvbiIsImFzIiwicCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/pages/homePage/CraftedComponent.tsx\n"));

/***/ })

});