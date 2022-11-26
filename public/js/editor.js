/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __webpack_require__ */\nvar Refresh = __webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  if (typeof moduleId === 'undefined') {\n    // `moduleId` is unavailable, which indicates that this module is not in the cache,\n    // which means we won't be able to capture any exports,\n    // and thus they cannot be refreshed safely.\n    // These are likely runtime or dynamically generated modules.\n    return {};\n  }\n\n  var maybeModule = __webpack_require__.c[moduleId];\n  if (typeof maybeModule === 'undefined') {\n    // `moduleId` is available but the module in cache is unavailable,\n    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).\n    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.\n    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');\n    return {};\n  }\n\n  var exportsOrPromise = maybeModule.exports;\n  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {\n    return exportsOrPromise.then(function (exports) {\n      return exports;\n    });\n  }\n  return exportsOrPromise;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  var signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (var key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {function(function(): void): void} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  var refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  var hasExports = false;\n  var areAllExportsComponents = true;\n  for (var key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    var exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (var key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    var exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      var typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevExports The current Webpack module exports object.\n * @param {*} nextExports The next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {\n  var prevSignature = getReactRefreshBoundarySignature(prevExports);\n  var nextSignature = getReactRefreshBoundarySignature(nextExports);\n\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (var i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nvar enqueueUpdate = createDebounceUpdate();\nfunction executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {\n  registerExportsForReactRefresh(moduleExports, moduleId);\n\n  if (webpackHot) {\n    var isHotUpdate = !!webpackHot.data;\n    var prevExports;\n    if (isHotUpdate) {\n      prevExports = webpackHot.data.prevExports;\n    }\n\n    if (isReactRefreshBoundary(moduleExports)) {\n      webpackHot.dispose(\n        /**\n         * A callback to performs a full refresh if React has unrecoverable errors,\n         * and also caches the to-be-disposed module.\n         * @param {*} data A hot module data object from Webpack HMR.\n         * @returns {void}\n         */\n        function hotDisposeCallback(data) {\n          // We have to mutate the data object to get data registered and cached\n          data.prevExports = moduleExports;\n        }\n      );\n      webpackHot.accept(\n        /**\n         * An error handler to allow self-recovering behaviours.\n         * @param {Error} error An error occurred during evaluation of a module.\n         * @returns {void}\n         */\n        function hotErrorHandler(error) {\n          if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n            refreshOverlay.handleRuntimeError(error);\n          }\n\n          if (typeof isTest !== 'undefined' && isTest) {\n            if (window.onHotAcceptError) {\n              window.onHotAcceptError(error.message);\n            }\n          }\n\n          __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);\n        }\n      );\n\n      if (isHotUpdate) {\n        if (\n          isReactRefreshBoundary(prevExports) &&\n          shouldInvalidateReactRefreshBoundary(prevExports, moduleExports)\n        ) {\n          webpackHot.invalidate();\n        } else {\n          enqueueUpdate(\n            /**\n             * A function to dismiss the error overlay after performing React refresh.\n             * @returns {void}\n             */\n            function updateCallback() {\n              if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n                refreshOverlay.clearRuntimeErrors();\n              }\n            }\n          );\n        }\n      }\n    } else {\n      if (isHotUpdate && typeof prevExports !== 'undefined') {\n        webpackHot.invalidate();\n      }\n    }\n  }\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: enqueueUpdate,\n  executeRuntime: executeRuntime,\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = exports.controllers = void 0;\nlet controllers = [];\nexports.controllers = controllers;\nconst make = (options) => __awaiter(void 0, void 0, void 0, function* () {\n    if (options.indicator && !customElements.get(`bud-activity-indicator`)) {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./indicator/index.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/index.js\"))).then((controller) => __awaiter(void 0, void 0, void 0, function* () { return yield controller.make(); }))\n            .then(controller => controllers.push(controller));\n    }\n    if (options.overlay && !customElements.get(`bud-error`)) {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./overlay/index.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/index.js\"))).then((controller) => __awaiter(void 0, void 0, void 0, function* () { return yield controller.make(); }))\n            .then(controller => controllers.push(controller));\n    }\n    return controllers;\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = void 0;\nconst indicator_component_js_1 = __webpack_require__(/*! ./indicator.component.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js\");\nconst indicator_controller_js_1 = __webpack_require__(/*! ./indicator.controller.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js\");\nconst make = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (customElements.get(`bud-activity-indicator`))\n        return;\n    customElements.define(`bud-activity-indicator`, indicator_component_js_1.Component);\n    return new indicator_controller_js_1.Controller();\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nconst indicator_pulse_js_1 = __webpack_require__(/*! ./indicator.pulse.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js\");\n/**\n * Indicator web component\n * @public\n */\nclass Component extends HTMLElement {\n    /**\n     * Class constructor\n     * @public\n     */\n    constructor() {\n        super();\n        /**\n         * Component name\n         * @public\n         */\n        this.name = `bud-activity-indicator`;\n        /**\n         * Status indicator colors\n         * @public\n         */\n        this.colors = {\n            success: [4, 120, 87, 1],\n            error: [220, 38, 38, 1],\n            warn: [252, 211, 77, 1],\n            pending: [59, 130, 246, 1],\n        };\n        this.renderShadow();\n    }\n    /**\n     * Root div querySelector selector\n     * @public\n     */\n    get selector() {\n        return `.${this.name}`;\n    }\n    /**\n     * Get accessor: has errors\n     * @public\n     */\n    get hasErrors() {\n        return this.getAttribute(`has-errors`) == `true`;\n    }\n    /**\n     * Get accessor: has warnings\n     * @public\n     */\n    get hasWarnings() {\n        return this.getAttribute(`has-warnings`) == `true`;\n    }\n    /**\n     * Render status indicator\n     * @public\n     */\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(this.name);\n        container.innerHTML = `\n    <style>\n    .bud-activity-indicator {\n      position: fixed;\n      width: 10px;\n      height: 10px;\n      left: 10px;\n      bottom: 10px;\n      z-index: 9999;\n      margin: 5px;\n      padding: 5px;\n      -webkit-transition:\n        all .6s ease-in-out,\n      transition:\n        all .6s ease-in-out;\n      animation-fill-mode: forwards;\n      pointer-events: none;\n      border-radius: 50%;\n      transform: scale(0);\n      opacity: 0;\n    }\n\n    .show {\n      opacity: 1;\n      background-color: rgba(255, 255, 255, 1);\n      transform: scale(1);\n      transition:\n        all .6s ease-in-out;\n    }\n\n    ${(0, indicator_pulse_js_1.pulse)(`success`, this.colors.success)}\n    ${(0, indicator_pulse_js_1.pulse)(`error`, this.colors.error)}\n    ${(0, indicator_pulse_js_1.pulse)(`warning`, this.colors.warn)}\n    ${(0, indicator_pulse_js_1.pulse)(`pending`, this.colors.pending)}\n\n    </style>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n    /**\n     * Show status indicator\n     * @public\n     */\n    show() {\n        this.hideTimeout && clearTimeout(this.hideTimeout);\n        this.shadowRoot.querySelector(this.selector).classList.add(`show`);\n    }\n    /**\n     * Hide status indicator\n     */\n    hide() {\n        this.hideTimeout = setTimeout(() => {\n            this.shadowRoot.querySelector(this.selector).classList.remove(`show`);\n        }, 2000);\n    }\n    /**\n     * Status is pending\n     * @public\n     */\n    onPending() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `success`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`pending`);\n        this.hide();\n    }\n    /**\n     * Status is success\n     * @public\n     */\n    onSuccess() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`success`);\n        this.hide();\n    }\n    /**\n     * Status is error\n     * @public\n     */\n    onError() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`warning`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`error`);\n    }\n    /**\n     * Status is warning\n     * @public\n     */\n    onWarning() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`warning`);\n    }\n    static get observedAttributes() {\n        return [`has-errors`, `has-warnings`, `action`];\n    }\n    attributeChangedCallback() {\n        if (this.hasAttribute(`has-errors`))\n            return this.onError();\n        if (this.hasAttribute(`has-warnings`))\n            return this.onWarning();\n        if (!this.hasAttribute(`has-errors`) &&\n            !this.hasAttribute(`has-warnings`) &&\n            this.getAttribute(`action`) === `built`)\n            return this.onSuccess();\n        if (this.getAttribute(`action`) == `building` ||\n            this.getAttribute(`action`) == `sync`)\n            return this.onPending();\n    }\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\n/**\n * Activity indicator controller\n * @public\n */\nclass Controller {\n    /**\n     * Initialization\n     * @public\n     */\n    constructor() {\n        /**\n         * Active WHM payload\n         * @public\n         */\n        this.payload = null;\n        this.node = document.createElement(`bud-activity-indicator`);\n        this.update = this.update.bind(this);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     *\n     * @public\n     */\n    addNode() {\n        var _a;\n        if (document.body.querySelector(`bud-activity-indicator`)) {\n            if (typeof this.timer.unref === `function`)\n                this.timer.unref();\n            this.removeNode();\n        }\n        (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(this.node);\n        this.timer = setTimeout(this.removeNode, 3000);\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     *\n     * @public\n     */\n    removeNode() {\n        var _a;\n        (_a = document.body.querySelector(`bud-activity-indicator`)) === null || _a === void 0 ? void 0 : _a.remove();\n    }\n    /**\n     * Update activity indicator\n     * @public\n     */\n    update(payload) {\n        var _a, _b;\n        this.node.toggleAttribute(`has-errors`, ((_a = payload.errors) === null || _a === void 0 ? void 0 : _a.length) ? true : false);\n        this.node.toggleAttribute(`has-warnings`, ((_b = payload.warnings) === null || _b === void 0 ? void 0 : _b.length) ? true : false);\n        this.node.setAttribute(`action`, payload.action);\n        this.addNode();\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pulse = void 0;\n/**\n * CSS animation for reload indicator\n * @public\n */\nconst pulse = (name, color) => `\n  .${name} {\n    box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n    animation: ${name}__pulse 2s infinite;\n    transition: all 0.4s ease-in-out;\n  }\n\n  .${name}:not(.show) {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n  }\n\n  .${name}.show {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n  }\n\n  @keyframes ${name}__pulse {\n    0% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7);\n    }\n\n    70% {\n      transform: scale(1);\n      box-shadow: 0 0 0 10px rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n\n    100% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n  }\n`;\nexports.pulse = pulse;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = void 0;\nconst overlay_component_js_1 = __webpack_require__(/*! ./overlay.component.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js\");\nconst overlay_controller_js_1 = __webpack_require__(/*! ./overlay.controller.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js\");\nconst make = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (customElements.get(`bud-error`))\n        return;\n    customElements.define(`bud-error`, overlay_component_js_1.Component);\n    return new overlay_controller_js_1.Controller();\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\n/**\n * Component container\n *\n * @public\n */\nclass Component extends HTMLElement {\n    constructor() {\n        super();\n        this.name = `bud-overlay`;\n        this.renderShadow();\n    }\n    get message() {\n        return this.getAttribute(`message`);\n    }\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(`overlay`);\n        container.innerHTML = `\n      <style>\n        .overlay {\n          width: 100vw;\n          backdrop-filter: blur(10px);\n          display: flex;\n          height: 100vh;\n          border-top: 2px solid transparent;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          position: absolute;\n          top: -1000px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          opacity: 0;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          justify-content: center;\n        }\n\n        .visible {\n          position: fixed;\n          top: 0;\n          z-index: 9998;\n          opacity: 1;\n          border-top: 5px solid red;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          max-width: 100vw;\n        }\n\n        .messages {\n          background-color: white;\n          border-radius: 5px;\n          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n          display: flex;\n          align-self: center;\n          width: 800px;\n          max-width: 90vw;\n          margin-left: auto;\n          margin-right: auto;\n          flex-direction: column;\n          flex-wrap: wrap;\n          align-items: center;\n          align-content: center;\n          padding: 2rem 2rem 0rem 2rem;\n        }\n\n        .visible .messages > div {\n          position: relative;\n          top: 0;\n          opacity: 1;\n          transition: all: 0.2s ease-in-out;\n        }\n\n        .messages > div {\n          position: relative;\n          top: 20px;\n          opacity: 0;\n          transition: all: 0.2s ease-in-out;\n          align-items: center;\n          align-content: center;\n          color: rgba(0, 0, 0, 0.87);\n          flex-direction: column;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n          padding: 0rem 2rem 2rem 2rem;\n          width: 100%;\n          max-width:95vw;\n        }\n\n        .messages > div > pre {\n          font-weight: 300;\n          font-size: 0.8rem;\n          overflow-x: scroll;\n        }\n\n        pre {\n          background: #303030;\n          color: #f1f1f1;\n          padding: 10px 16px;\n          border-radius: 2px;\n          border-top: 4px solid #dd0303;\n          -moz-box-shadow: inset 0 0 10px #000;\n          box-shadow: inset 0 0 10px #000;\n          counter-reset: line;\n        }\n\n        pre span {\n          display: block;\n          line-height: 1.5rem;\n        }\n\n        pre span:before {\n          counter-increment: line;\n          content: counter(line);\n          display: inline-block;\n          border-right: 1px solid #ddd;\n          padding: 0 .5em;\n          margin-right: .5em;\n          color: #888;\n          width: 30px;\n        }\n      </style>\n      <div class=\"messages\"></div>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n    static get observedAttributes() {\n        return [`message`];\n    }\n    attributeChangedCallback() {\n        var _a, _b, _c;\n        if (!this.documentBodyStyle)\n            this.documentBodyStyle = (_a = document.body) === null || _a === void 0 ? void 0 : _a.style;\n        if (this.getAttribute(`message`)) {\n            document.body.style.overflow = `hidden`;\n            this.shadowRoot.querySelector(`.overlay`).classList.add(`visible`);\n            this.shadowRoot.querySelector(`.messages`).innerHTML =\n                this.getAttribute(`message`);\n            return;\n        }\n        if (((_b = this.documentBodyStyle) === null || _b === void 0 ? void 0 : _b.overflow) && ((_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.style)) {\n            document.body.style.overflow = this.documentBodyStyle.overflow;\n        }\n        this.shadowRoot.querySelector(`.overlay`).classList.remove(`visible`);\n    }\n    connectedCallback() {\n        var _a;\n        if ((_a = document.body) === null || _a === void 0 ? void 0 : _a.style)\n            this.documentBodyStyle = document.body.style;\n    }\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\nconst strip_ansi_1 = __importDefault(__webpack_require__(/*! strip-ansi */ \"./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js\"));\n/**\n * Overlay controller\n * @public\n */\nclass Controller {\n    /**\n     * Class constructor\n     *\n     * @public\n     */\n    constructor() {\n        this.update = this.update.bind(this);\n        this.element = document.createElement(`bud-error`);\n    }\n    /**\n     * Formatted error message\n     * @public\n     */\n    get message() {\n        var _a;\n        return (_a = this.payload.errors) === null || _a === void 0 ? void 0 : _a.reduce((a, c) => {\n            var _a;\n            return `${a}\n        <div>\n          <pre>${(_a = (0, strip_ansi_1.default)(c === null || c === void 0 ? void 0 : c.message)) !== null && _a !== void 0 ? _a : ``}</pre>\n        </div>`;\n        }, ``);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     *\n     * @public\n     */\n    createError() {\n        var _a;\n        !document.body.querySelector(`bud-error`) &&\n            ((_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(this.element));\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     *\n     * @public\n     */\n    removeError() {\n        var _a;\n        (_a = document.body.querySelector(`bud-error`)) === null || _a === void 0 ? void 0 : _a.remove();\n    }\n    /**\n     * Update DOM\n     *\n     * @public\n     */\n    update(payload) {\n        var _a, _b;\n        this.payload = payload;\n        this.element.setAttribute(`message`, (_a = this.message) !== null && _a !== void 0 ? _a : ``);\n        if (((_b = this.payload.errors) === null || _b === void 0 ? void 0 : _b.length) > 0) {\n            return this.createError();\n        }\n        this.removeError();\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/hmr/events.js":
/*!**********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/hmr/events.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n/* eslint-disable no-console */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Events = void 0;\n/**\n * HMR EventSource\n *\n * @public\n */\nclass Events extends EventSource {\n    /**\n     * Class constructor\n     *\n     * @remarks\n     * Singleton interface, so this is private.\n     */\n    constructor(options) {\n        super(options.path);\n        this.options = options;\n        /**\n         * Messages\n         */\n        this.messages = new Set();\n        /**\n         * Registered listeners\n         * @public\n         */\n        this.listeners = new Set();\n        /**\n         * EventSource `onopen` handler\n         * @public\n         */\n        this.onopen = function (ev) {\n            return __awaiter(this, void 0, void 0, function* () {\n                console.log(`[bud] connected`);\n            });\n        };\n        /**\n         * EventSource `onmessage` handler\n         * @public\n         */\n        this.onmessage = function (payload) {\n            var _a, _b, _c, _d;\n            return __awaiter(this, void 0, void 0, function* () {\n                // @ts-ignore\n                if (!payload)\n                    return;\n                try {\n                    this.payload = JSON.parse(payload.data);\n                    ((_a = this.payload) === null || _a === void 0 ? void 0 : _a.action) === `reload` &&\n                        this.options.reload &&\n                        window.location.reload();\n                    if ((_b = this.payload) === null || _b === void 0 ? void 0 : _b.hash) {\n                        if (this.messages.has((_c = this.payload) === null || _c === void 0 ? void 0 : _c.hash))\n                            return;\n                        this.currentHash = (_d = this.payload) === null || _d === void 0 ? void 0 : _d.hash;\n                        this.messages.add(this.currentHash);\n                    }\n                    if (this.messages.size <= 1)\n                        return;\n                    yield Promise.all([...this.listeners].map((listener) => __awaiter(this, void 0, void 0, function* () { return yield listener(payload); })));\n                }\n                catch (error) { }\n            });\n        };\n        this.onopen = this.onopen.bind(this);\n        this.onmessage = this.onmessage.bind(this);\n        this.addMessageListener = this.addMessageListener.bind(this);\n    }\n    /**\n     * Singleton constructor\n     * @public\n     */\n    static make(options) {\n        if (!window.bud)\n            window.bud = { hmr: {} };\n        if (!window.bud.hmr[options.path]) {\n            window.bud.hmr[options.path] = new Events(options);\n        }\n        return window.bud.hmr[options.path];\n    }\n    /**\n     * EventSource `addMessageListener` handler\n     * @public\n     */\n    addMessageListener(callback) {\n        this.listeners.add(callback);\n        return this;\n    }\n}\nexports.Events = Events;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/hmr/events.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true ***!
  \*******************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?name=sage&indicator=true&overlay=true&reload=true\";\n\n/* eslint-disable no-console */\n/* global __resourceQuery */\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./interface */ \"./node_modules/@roots/bud-client/lib/interface.js\");\nconst components = __importStar(__webpack_require__(/*! ./components/index.js */ \"./node_modules/@roots/bud-client/lib/components/index.js\"));\nconst events_js_1 = __webpack_require__(/*! ./hmr/events.js */ \"./node_modules/@roots/bud-client/lib/hmr/events.js\");\nconst clientOptions = __importStar(__webpack_require__(/*! ./options */ \"./node_modules/@roots/bud-client/lib/options.js\"));\n((queryString) => __awaiter(void 0, void 0, void 0, function* () {\n    /**\n     * Webpack hot interface\n     */\n    const webpackHot = module.hot;\n    /* Set client options from URL params */\n    const options = clientOptions.setFromParameters(queryString);\n    /**\n     * Returns true if environment supports HMR\n     */\n    if (typeof (window === null || window === void 0 ? void 0 : window.EventSource) === `undefined`) {\n        console.error(`[bud] hot module reload requires EventSource to work. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`);\n        return false;\n    }\n    /**\n     * Webpack HMR check handler\n     */\n    const check = () => __awaiter(void 0, void 0, void 0, function* () {\n        return webpackHot.status() === `idle` &&\n            (yield webpackHot.check(false).then((modules) => __awaiter(void 0, void 0, void 0, function* () {\n                modules && (yield update());\n            })));\n    });\n    /**\n     * Webpack HMR unaccepted module handler\n     */\n    const onUnacceptedOrDeclined = (info) => {\n        console.warn(`[${options.name}] ${info.type}`, info);\n        options.reload && window.location.reload();\n    };\n    /**\n     * Webpack HMR error handler\n     */\n    const onErrored = error => {\n        var _a, _b;\n        const message = `[${(_a = error === null || error === void 0 ? void 0 : error.moduleId) !== null && _a !== void 0 ? _a : options.name}] ${(_b = error === null || error === void 0 ? void 0 : error.error) !== null && _b !== void 0 ? _b : `error`}`;\n        console.error(message);\n        components.controllers.map(controller => controller.update({\n            type: `accept-errored`,\n            action: `built`,\n            errors: [{ message }],\n        }));\n    };\n    /**\n     * Webpack HMR update handler\n     */\n    const update = () => __awaiter(void 0, void 0, void 0, function* () {\n        webpackHot.status() === `ready` &&\n            (yield webpackHot.apply({\n                autoApply: false,\n                ignoreUnaccepted: true,\n                ignoreDeclined: true,\n                ignoreErrored: true,\n                onErrored,\n                onUnaccepted: onUnacceptedOrDeclined,\n                onDeclined: onUnacceptedOrDeclined,\n            }));\n    });\n    /* Instantiate eventSource */\n    const eventSource = events_js_1.Events.make(options);\n    /* Instantiate indicator, overlay */\n    yield components.make(options);\n    /* Instantiate HMR event source and register client listeners */\n    eventSource.addMessageListener((event) => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            const data = JSON.parse(event.data);\n            if (!data)\n                return;\n            if (data.action === `reload`)\n                window.location.reload();\n            components.controllers.map(controller => controller.update(data));\n            if (__webpack_require__.h() !== eventSource.currentHash)\n                yield check();\n        }\n        catch (error) { }\n    }));\n}))(__resourceQuery);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/intercept.js":
/*!*********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/intercept.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intercept = (...args) => {\n    args.every(arg => typeof arg === `string`) &&\n        setInterval(() => [\n            [document.getElementsByTagName(`a`), `href`],\n            [document.getElementsByTagName(`link`), `href`],\n        ]\n            .map(([elements, attribute]) => [Array.from(elements), attribute])\n            .forEach(([elements, attribute]) => elements\n            .filter(el => el.hasAttribute(attribute))\n            .filter(el => !el.hasAttribute(`__bud_processed`))\n            .filter(el => el.getAttribute(attribute).startsWith(args[0]))\n            .map(el => {\n            const value = el.getAttribute(attribute).replace(...args);\n            el.setAttribute(attribute, value);\n            el.toggleAttribute(`__bud_processed`);\n        })), 1000);\n};\nexports[\"default\"] = intercept;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/intercept.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/interface.js":
/*!*********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/interface.js ***!
  \*********************************************************/
/***/ (() => {

eval("var __resourceQuery;\nvar __webpack_hash__;\nvar bud;\nvar module;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/interface.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/options.js":
/*!*******************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/options.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setFromParameters = exports.get = exports.data = void 0;\n/**\n * Client options\n * @public\n */\nlet data = {\n    [`default`]: {\n        timeout: 20 * 1000,\n        reload: true,\n        name: `default`,\n        debug: true,\n        log: true,\n        path: `/__bud/hmr`,\n        indicator: true,\n        overlay: true,\n    },\n};\nexports.data = data;\n/**\n * Get client option\n * @public\n */\nconst get = (name, key) => key ? data[name][key] : data[name];\nexports.get = get;\n/**\n * Set client data based on URL parameters\n */\nconst setFromParameters = (query) => {\n    let parsedParams = {};\n    new window.URLSearchParams(query).forEach((value, key) => {\n        parsedParams[key] =\n            value === `true` ? true : value === `false` ? false : value;\n    });\n    data[parsedParams.name] = Object.assign(Object.assign({}, data.default), parsedParams);\n    return data[parsedParams.name];\n};\nexports.setFromParameters = setFromParameters;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/options.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Flemonbalm-wp.test%2F&replace=%2F":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Flemonbalm-wp.test%2F&replace=%2F ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?search=http%3A%2F%2Flemonbalm-wp.test%2F&replace=%2F\";\n\n/* eslint-disable no-console */\n/* global __resourceQuery */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intercept_1 = __importDefault(__webpack_require__(/*! ./intercept */ \"./node_modules/@roots/bud-client/lib/intercept.js\"));\nwindow.requestAnimationFrame(function ready() {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (false)\n            {}\n        const params = new URLSearchParams(__resourceQuery);\n        if (!params || !params.has(`search`) || !params.has(`replace`))\n            return;\n        const search = decodeURI(params.get(`search`));\n        const replace = decodeURI(params.get(`replace`));\n        return document.body\n            ? (0, intercept_1.default)(search, replace)\n            : window.requestAnimationFrame(ready);\n    });\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?");

/***/ }),

/***/ "./resources/scripts/editor.js":
/*!*************************************!*\
  !*** ./resources/scripts/editor.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @roots/sage/client */ \"./node_modules/@roots/sage/lib/client/index.js\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _import$meta$webpackH;\n\n\n\n/**\n * editor.main\n */\nconst main = err => {\n  if (err) {\n    // handle hmr errors\n    console.error(err);\n  }\n  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/button', 'outline');\n  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/button', {\n    name: 'outline',\n    label: 'Outline'\n  });\n};\n\n/**\n * Initialize\n *\n * @see https://webpack.js.org/api/hot-module-replacement\n */\n(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);\n(_import$meta$webpackH = module.hot) === null || _import$meta$webpackH === void 0 ? void 0 : _import$meta$webpackH.accept(main);\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://sage/./resources/scripts/editor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parent = __webpack_require__(/*! ../stable/global-this */ \"./node_modules/core-js-pure/stable/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/actual/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/global-this.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/global-this.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/es/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/global-this.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/global-this.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ../full/global-this */ \"./node_modules/core-js-pure/full/global-this.js\");\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/features/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/global-this.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/full/global-this.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO: remove from `core-js@4`\n__webpack_require__(/*! ../modules/esnext.global-this */ \"./node_modules/core-js-pure/modules/esnext.global-this.js\");\n\nvar parent = __webpack_require__(/*! ../actual/global-this */ \"./node_modules/core-js-pure/actual/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/full/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-callable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-callable.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThisRaw = __webpack_require__(/*! ../internals/function-uncurry-this-raw */ \"./node_modules/core-js-pure/internals/function-uncurry-this-raw.js\");\n\nvar toString = uncurryThisRaw({}.toString);\nvar stringSlice = uncurryThisRaw(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-global-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-global-property.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/define-global-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-all.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("var documentAll = typeof document == 'object' && document.all;\n\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\nvar IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;\n\nmodule.exports = {\n  all: documentAll,\n  IS_HTMLDDA: IS_HTMLDDA\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/document-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f);\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof Wrapper) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return apply(NativeConstructor, this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    createNonEnumerableProperty(target, key, resultProperty);\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-apply.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-apply.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-native.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-native.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-call.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-call.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this-raw.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this-raw.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = function (fn) {\n  return NATIVE_BIND ? uncurryThisWithBind(fn) : function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-uncurry-this-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar uncurryThisRaw = __webpack_require__(/*! ../internals/function-uncurry-this-raw */ \"./node_modules/core-js-pure/internals/function-uncurry-this-raw.js\");\n\nmodule.exports = function (fn) {\n  // Nashorn bug:\n  //   https://github.com/zloirock/core-js/issues/1128\n  //   https://github.com/zloirock/core-js/issues/1130\n  if (classofRaw(fn) === 'Function') return uncurryThisRaw(fn);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar aFunction = function (variable) {\n  return isCallable(variable) ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-method.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-method.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has-own-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has-own-property.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-callable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-callable.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js-pure/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = $documentAll.IS_HTMLDDA ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-null-or-undefined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-null-or-undefined.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js-pure/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\nmodule.exports = $documentAll.IS_HTMLDDA ? function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;\n} : function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-is-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-is-prototype-of.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js-pure/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || defineGlobalProperty(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.25.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-constructor-detection.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js-pure/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/try-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/try-to-string.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("var $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/v8-prototype-define-bug.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/v8-prototype-define-bug.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.global-this.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.global-this.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n// `globalThis` object\n// https://tc39.es/ecma262/#sec-globalthis\n$({ global: true, forced: global.globalThis !== global }, {\n  globalThis: global\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/modules/es.global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.global-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.global-this.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/modules/esnext.global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parent = __webpack_require__(/*! ../es/global-this */ \"./node_modules/core-js-pure/es/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/stable/global-this.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/editor.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/editor.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../resources/fonts/Karla-Regular.woff2 */ \"./resources/fonts/Karla-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../resources/fonts/Karla-Bold.woff2 */ \"./resources/fonts/Karla-Bold.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../resources/fonts/SourceSerifPro-Regular.woff2 */ \"./resources/fonts/SourceSerifPro-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.2.0 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: currentColor; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  tab-size: 4; /* 3 */\\n  font-family: Karla, sans-serif; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted currentColor;\\n          text-decoration: underline dotted currentColor;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n[hidden] {\\n  display: none;\\n}\\n  @font-face {\\n    font-family: \\\"Karla\\\";\\n    font-weight: 400;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\n  }\\n  @font-face {\\n    font-family: \\\"Karla\\\";\\n    font-weight: 700;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff2\\\");\\n  }\\n  @font-face {\\n    font-family: \\\"Source Serif Pro\\\";\\n    font-weight: 400;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\");\\n  }\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::-webkit-backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.container {\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding-right: 1rem;\\n  padding-left: 1rem;\\n}\\n@media (min-width: 640px) {\\n\\n  .container {\\n    max-width: 640px;\\n    padding-right: 2rem;\\n    padding-left: 2rem;\\n  }\\n}\\n@media (min-width: 768px) {\\n\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n\\n  .container {\\n    max-width: 1024px;\\n    padding-right: 4rem;\\n    padding-left: 4rem;\\n  }\\n}\\n@media (min-width: 1280px) {\\n\\n  .container {\\n    max-width: 1280px;\\n    padding-right: 5rem;\\n    padding-left: 5rem;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .container {\\n    max-width: 1536px;\\n    padding-right: 6rem;\\n    padding-left: 6rem;\\n  }\\n}\\n.prose {\\n  color: var(--tw-prose-body);\\n  max-width: 65ch;\\n}\\n.prose :where([class~=\\\"lead\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-lead);\\n  font-size: 1.25em;\\n  line-height: 1.6;\\n  margin-top: 1.2em;\\n  margin-bottom: 1.2em;\\n}\\n.prose :where(a):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-links);\\n  text-decoration: underline;\\n  font-weight: 500;\\n}\\n.prose :where(strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-bold);\\n  font-weight: 600;\\n}\\n.prose :where(a strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(blockquote strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(thead th strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(ol):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: decimal;\\n  margin-top: 1.25em;\\n  margin-bottom: 1.25em;\\n  padding-left: 1.625em;\\n}\\n.prose :where(ol[type=\\\"A\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: upper-alpha;\\n}\\n.prose :where(ol[type=\\\"a\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: lower-alpha;\\n}\\n.prose :where(ol[type=\\\"A\\\" s]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: upper-alpha;\\n}\\n.prose :where(ol[type=\\\"a\\\" s]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: lower-alpha;\\n}\\n.prose :where(ol[type=\\\"I\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: upper-roman;\\n}\\n.prose :where(ol[type=\\\"i\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: lower-roman;\\n}\\n.prose :where(ol[type=\\\"I\\\" s]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: upper-roman;\\n}\\n.prose :where(ol[type=\\\"i\\\" s]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: lower-roman;\\n}\\n.prose :where(ol[type=\\\"1\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: decimal;\\n}\\n.prose :where(ul):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  list-style-type: disc;\\n  margin-top: 1.25em;\\n  margin-bottom: 1.25em;\\n  padding-left: 1.625em;\\n}\\n.prose :where(ol > li):not(:where([class~=\\\"not-prose\\\"] *))::marker {\\n  font-weight: 400;\\n  color: var(--tw-prose-counters);\\n}\\n.prose :where(ul > li):not(:where([class~=\\\"not-prose\\\"] *))::marker {\\n  color: var(--tw-prose-bullets);\\n}\\n.prose :where(hr):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  border-color: var(--tw-prose-hr);\\n  border-top-width: 1px;\\n  margin-top: 3em;\\n  margin-bottom: 3em;\\n}\\n.prose :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 500;\\n  font-style: italic;\\n  color: var(--tw-prose-quotes);\\n  border-left-width: 0.25rem;\\n  border-left-color: var(--tw-prose-quote-borders);\\n  quotes: \\\"\\\\201C\\\"\\\"\\\\201D\\\"\\\"\\\\2018\\\"\\\"\\\\2019\\\";\\n  margin-top: 1.6em;\\n  margin-bottom: 1.6em;\\n  padding-left: 1em;\\n}\\n.prose :where(blockquote p:first-of-type):not(:where([class~=\\\"not-prose\\\"] *))::before {\\n  content: open-quote;\\n}\\n.prose :where(blockquote p:last-of-type):not(:where([class~=\\\"not-prose\\\"] *))::after {\\n  content: close-quote;\\n}\\n.prose :where(h1):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-headings);\\n  font-weight: 800;\\n  font-size: 2.25em;\\n  margin-top: 0;\\n  margin-bottom: 0.8888889em;\\n  line-height: 1.1111111;\\n}\\n.prose :where(h1 strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 900;\\n  color: inherit;\\n}\\n.prose :where(h2):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-headings);\\n  font-weight: 700;\\n  font-size: 1.5em;\\n  margin-top: 2em;\\n  margin-bottom: 1em;\\n  line-height: 1.3333333;\\n}\\n.prose :where(h2 strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 800;\\n  color: inherit;\\n}\\n.prose :where(h3):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-headings);\\n  font-weight: 600;\\n  font-size: 1.25em;\\n  margin-top: 1.6em;\\n  margin-bottom: 0.6em;\\n  line-height: 1.6;\\n}\\n.prose :where(h3 strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 700;\\n  color: inherit;\\n}\\n.prose :where(h4):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-headings);\\n  font-weight: 600;\\n  margin-top: 1.5em;\\n  margin-bottom: 0.5em;\\n  line-height: 1.5;\\n}\\n.prose :where(h4 strong):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 700;\\n  color: inherit;\\n}\\n.prose :where(img):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose :where(figure > *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n.prose :where(figcaption):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-captions);\\n  font-size: 0.875em;\\n  line-height: 1.4285714;\\n  margin-top: 0.8571429em;\\n}\\n.prose :where(code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-code);\\n  font-weight: 600;\\n  font-size: 0.875em;\\n}\\n.prose :where(code):not(:where([class~=\\\"not-prose\\\"] *))::before {\\n  content: \\\"`\\\";\\n}\\n.prose :where(code):not(:where([class~=\\\"not-prose\\\"] *))::after {\\n  content: \\\"`\\\";\\n}\\n.prose :where(a code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(h1 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(h2 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n  font-size: 0.875em;\\n}\\n.prose :where(h3 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n  font-size: 0.9em;\\n}\\n.prose :where(h4 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(blockquote code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(thead th code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: inherit;\\n}\\n.prose :where(pre):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-pre-code);\\n  background-color: var(--tw-prose-pre-bg);\\n  overflow-x: auto;\\n  font-weight: 400;\\n  font-size: 0.875em;\\n  line-height: 1.7142857;\\n  margin-top: 1.7142857em;\\n  margin-bottom: 1.7142857em;\\n  border-radius: 0.375rem;\\n  padding-top: 0.8571429em;\\n  padding-right: 1.1428571em;\\n  padding-bottom: 0.8571429em;\\n  padding-left: 1.1428571em;\\n}\\n.prose :where(pre code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  background-color: transparent;\\n  border-width: 0;\\n  border-radius: 0;\\n  padding: 0;\\n  font-weight: inherit;\\n  color: inherit;\\n  font-size: inherit;\\n  font-family: inherit;\\n  line-height: inherit;\\n}\\n.prose :where(pre code):not(:where([class~=\\\"not-prose\\\"] *))::before {\\n  content: none;\\n}\\n.prose :where(pre code):not(:where([class~=\\\"not-prose\\\"] *))::after {\\n  content: none;\\n}\\n.prose :where(table):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  width: 100%;\\n  table-layout: auto;\\n  text-align: left;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  font-size: 0.875em;\\n  line-height: 1.7142857;\\n}\\n.prose :where(thead):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  border-bottom-width: 1px;\\n  border-bottom-color: var(--tw-prose-th-borders);\\n}\\n.prose :where(thead th):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  color: var(--tw-prose-headings);\\n  font-weight: 600;\\n  vertical-align: bottom;\\n  padding-right: 0.5714286em;\\n  padding-bottom: 0.5714286em;\\n  padding-left: 0.5714286em;\\n}\\n.prose :where(tbody tr):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  border-bottom-width: 1px;\\n  border-bottom-color: var(--tw-prose-td-borders);\\n}\\n.prose :where(tbody tr:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  border-bottom-width: 0;\\n}\\n.prose :where(tbody td):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  vertical-align: baseline;\\n}\\n.prose :where(tfoot):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  border-top-width: 1px;\\n  border-top-color: var(--tw-prose-th-borders);\\n}\\n.prose :where(tfoot td):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  vertical-align: top;\\n}\\n.prose {\\n  --tw-prose-body: #374151;\\n  --tw-prose-headings: #111827;\\n  --tw-prose-lead: #4b5563;\\n  --tw-prose-links: #111827;\\n  --tw-prose-bold: #111827;\\n  --tw-prose-counters: #6b7280;\\n  --tw-prose-bullets: #d1d5db;\\n  --tw-prose-hr: #e5e7eb;\\n  --tw-prose-quotes: #111827;\\n  --tw-prose-quote-borders: #e5e7eb;\\n  --tw-prose-captions: #6b7280;\\n  --tw-prose-code: #111827;\\n  --tw-prose-pre-code: #e5e7eb;\\n  --tw-prose-pre-bg: #1f2937;\\n  --tw-prose-th-borders: #d1d5db;\\n  --tw-prose-td-borders: #e5e7eb;\\n  --tw-prose-invert-body: #d1d5db;\\n  --tw-prose-invert-headings: #fff;\\n  --tw-prose-invert-lead: #9ca3af;\\n  --tw-prose-invert-links: #fff;\\n  --tw-prose-invert-bold: #fff;\\n  --tw-prose-invert-counters: #9ca3af;\\n  --tw-prose-invert-bullets: #4b5563;\\n  --tw-prose-invert-hr: #374151;\\n  --tw-prose-invert-quotes: #f3f4f6;\\n  --tw-prose-invert-quote-borders: #374151;\\n  --tw-prose-invert-captions: #9ca3af;\\n  --tw-prose-invert-code: #fff;\\n  --tw-prose-invert-pre-code: #d1d5db;\\n  --tw-prose-invert-pre-bg: rgba(0, 0, 0, 0.5);\\n  --tw-prose-invert-th-borders: #4b5563;\\n  --tw-prose-invert-td-borders: #374151;\\n  font-size: 1rem;\\n  line-height: 1.75;\\n}\\n.prose :where(p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.25em;\\n  margin-bottom: 1.25em;\\n}\\n.prose :where(video):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose :where(figure):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose :where(li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.5em;\\n  margin-bottom: 0.5em;\\n}\\n.prose :where(ol > li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0.375em;\\n}\\n.prose :where(ul > li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0.375em;\\n}\\n.prose :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.75em;\\n  margin-bottom: 0.75em;\\n}\\n.prose :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.25em;\\n}\\n.prose :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.25em;\\n}\\n.prose :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.25em;\\n}\\n.prose :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.25em;\\n}\\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.75em;\\n  margin-bottom: 0.75em;\\n}\\n.prose :where(hr + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose :where(h2 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose :where(h3 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose :where(h4 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose :where(thead th:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0;\\n}\\n.prose :where(thead th:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-right: 0;\\n}\\n.prose :where(tbody td, tfoot td):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-top: 0.5714286em;\\n  padding-right: 0.5714286em;\\n  padding-bottom: 0.5714286em;\\n  padding-left: 0.5714286em;\\n}\\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0;\\n}\\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-right: 0;\\n}\\n.prose :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.prose-sm :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.5714286em;\\n  margin-bottom: 0.5714286em;\\n}\\n.prose-sm :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.1428571em;\\n}\\n.prose-sm :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.1428571em;\\n}\\n.prose-sm :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.1428571em;\\n}\\n.prose-sm :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.1428571em;\\n}\\n.prose-sm :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-sm :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.prose-base :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.75em;\\n  margin-bottom: 0.75em;\\n}\\n.prose-base :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.25em;\\n}\\n.prose-base :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.25em;\\n}\\n.prose-base :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.25em;\\n}\\n.prose-base :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.25em;\\n}\\n.prose-base :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-base :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.prose-lg :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.8888889em;\\n  margin-bottom: 0.8888889em;\\n}\\n.prose-lg :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.3333333em;\\n}\\n.prose-lg :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.3333333em;\\n}\\n.prose-lg :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.3333333em;\\n}\\n.prose-lg :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.3333333em;\\n}\\n.prose-lg :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-lg :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.prose-xl {\\n  font-size: 1.25rem;\\n  line-height: 1.8;\\n}\\n.prose-xl :where(p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.2em;\\n  margin-bottom: 1.2em;\\n}\\n.prose-xl :where([class~=\\\"lead\\\"]):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 1.2em;\\n  line-height: 1.5;\\n  margin-top: 1em;\\n  margin-bottom: 1em;\\n}\\n.prose-xl :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.6em;\\n  margin-bottom: 1.6em;\\n  padding-left: 1.0666667em;\\n}\\n.prose-xl :where(h1):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 2.8em;\\n  margin-top: 0;\\n  margin-bottom: 0.8571429em;\\n  line-height: 1;\\n}\\n.prose-xl :where(h2):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 1.8em;\\n  margin-top: 1.5555556em;\\n  margin-bottom: 0.8888889em;\\n  line-height: 1.1111111;\\n}\\n.prose-xl :where(h3):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 1.5em;\\n  margin-top: 1.6em;\\n  margin-bottom: 0.6666667em;\\n  line-height: 1.3333333;\\n}\\n.prose-xl :where(h4):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.8em;\\n  margin-bottom: 0.6em;\\n  line-height: 1.6;\\n}\\n.prose-xl :where(img):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose-xl :where(video):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose-xl :where(figure):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n}\\n.prose-xl :where(figure > *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n.prose-xl :where(figcaption):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.9em;\\n  line-height: 1.5555556;\\n  margin-top: 1em;\\n}\\n.prose-xl :where(code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.9em;\\n}\\n.prose-xl :where(h2 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.8611111em;\\n}\\n.prose-xl :where(h3 code):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.9em;\\n}\\n.prose-xl :where(pre):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.9em;\\n  line-height: 1.7777778;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  border-radius: 0.5rem;\\n  padding-top: 1.1111111em;\\n  padding-right: 1.3333333em;\\n  padding-bottom: 1.1111111em;\\n  padding-left: 1.3333333em;\\n}\\n.prose-xl :where(ol):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.2em;\\n  margin-bottom: 1.2em;\\n  padding-left: 1.6em;\\n}\\n.prose-xl :where(ul):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.2em;\\n  margin-bottom: 1.2em;\\n  padding-left: 1.6em;\\n}\\n.prose-xl :where(li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.6em;\\n  margin-bottom: 0.6em;\\n}\\n.prose-xl :where(ol > li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0.4em;\\n}\\n.prose-xl :where(ul > li):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0.4em;\\n}\\n.prose-xl :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.8em;\\n  margin-bottom: 0.8em;\\n}\\n.prose-xl :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.2em;\\n}\\n.prose-xl :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.2em;\\n}\\n.prose-xl :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.2em;\\n}\\n.prose-xl :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.2em;\\n}\\n.prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.8em;\\n  margin-bottom: 0.8em;\\n}\\n.prose-xl :where(hr):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 2.8em;\\n  margin-bottom: 2.8em;\\n}\\n.prose-xl :where(hr + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-xl :where(h2 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-xl :where(h3 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-xl :where(h4 + *):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-xl :where(table):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 0.9em;\\n  line-height: 1.5555556;\\n}\\n.prose-xl :where(thead th):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-right: 0.6666667em;\\n  padding-bottom: 0.8888889em;\\n  padding-left: 0.6666667em;\\n}\\n.prose-xl :where(thead th:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0;\\n}\\n.prose-xl :where(thead th:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-right: 0;\\n}\\n.prose-xl :where(tbody td, tfoot td):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-top: 0.8888889em;\\n  padding-right: 0.6666667em;\\n  padding-bottom: 0.8888889em;\\n  padding-left: 0.6666667em;\\n}\\n.prose-xl :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-left: 0;\\n}\\n.prose-xl :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  padding-right: 0;\\n}\\n.prose-xl :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-xl :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.prose-2xl :where(.prose > ul > li p):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0.8333333em;\\n  margin-bottom: 0.8333333em;\\n}\\n.prose-2xl :where(.prose > ul > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.3333333em;\\n}\\n.prose-2xl :where(.prose > ul > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.3333333em;\\n}\\n.prose-2xl :where(.prose > ol > li > *:first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 1.3333333em;\\n}\\n.prose-2xl :where(.prose > ol > li > *:last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 1.3333333em;\\n}\\n.prose-2xl :where(.prose > :first-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-top: 0;\\n}\\n.prose-2xl :where(.prose > :last-child):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  margin-bottom: 0;\\n}\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border-width: 0;\\n}\\n.static {\\n  position: static;\\n}\\n.absolute {\\n  position: absolute;\\n}\\n.relative {\\n  position: relative;\\n}\\n.-inset-10 {\\n  top: -2.5rem;\\n  right: -2.5rem;\\n  bottom: -2.5rem;\\n  left: -2.5rem;\\n}\\n.-inset-20 {\\n  top: -5rem;\\n  right: -5rem;\\n  bottom: -5rem;\\n  left: -5rem;\\n}\\n.-inset-24 {\\n  top: -6rem;\\n  right: -6rem;\\n  bottom: -6rem;\\n  left: -6rem;\\n}\\n.-inset-16 {\\n  top: -4rem;\\n  right: -4rem;\\n  bottom: -4rem;\\n  left: -4rem;\\n}\\n.top-0 {\\n  top: 0px;\\n}\\n.left-0 {\\n  left: 0px;\\n}\\n.right-0 {\\n  right: 0px;\\n}\\n.-top-20 {\\n  top: -5rem;\\n}\\n.-left-20 {\\n  left: -5rem;\\n}\\n.-left-8 {\\n  left: -2rem;\\n}\\n.top-24 {\\n  top: 6rem;\\n}\\n.top-full {\\n  top: 100%;\\n}\\n.-right-24 {\\n  right: -6rem;\\n}\\n.right-36 {\\n  right: 9rem;\\n}\\n.-top-12 {\\n  top: -3rem;\\n}\\n.right-72 {\\n  right: 18rem;\\n}\\n.-top-24 {\\n  top: -6rem;\\n}\\n.-bottom-72 {\\n  bottom: -18rem;\\n}\\n.top-4 {\\n  top: 1rem;\\n}\\n.-left-12 {\\n  left: -3rem;\\n}\\n.-bottom-0 {\\n  bottom: -0px;\\n}\\n.right-12 {\\n  right: 3rem;\\n}\\n.top-36 {\\n  top: 9rem;\\n}\\n.left-72 {\\n  left: 18rem;\\n}\\n.-bottom-16 {\\n  bottom: -4rem;\\n}\\n.-right-8 {\\n  right: -2rem;\\n}\\n.top-\\\\[calc\\\\(100\\\\%\\\\+12rem\\\\)\\\\] {\\n  top: calc(100% + 12rem);\\n}\\n.left-\\\\[200\\\\%\\\\] {\\n  left: 200%;\\n}\\n.bottom-0 {\\n  bottom: 0px;\\n}\\n.-bottom-2 {\\n  bottom: -0.5rem;\\n}\\n.-bottom-12 {\\n  bottom: -3rem;\\n}\\n.-bottom-24 {\\n  bottom: -6rem;\\n}\\n.-bottom-36 {\\n  bottom: -9rem;\\n}\\n.-left-24 {\\n  left: -6rem;\\n}\\n.-left-48 {\\n  left: -12rem;\\n}\\n.-top-48 {\\n  top: -12rem;\\n}\\n.top-auto {\\n  top: auto;\\n}\\n.-bottom-40 {\\n  bottom: -10rem;\\n}\\n.-bottom-48 {\\n  bottom: -12rem;\\n}\\n.-left-32 {\\n  left: -8rem;\\n}\\n.-left-40 {\\n  left: -10rem;\\n}\\n.-top-32 {\\n  top: -8rem;\\n}\\n.-top-8 {\\n  top: -2rem;\\n}\\n.-bottom-8 {\\n  bottom: -2rem;\\n}\\n.right-8 {\\n  right: 2rem;\\n}\\n.right-16 {\\n  right: 4rem;\\n}\\n.z-10 {\\n  z-index: 10;\\n}\\n.-z-10 {\\n  z-index: -10;\\n}\\n.-order-1 {\\n  order: -1;\\n}\\n.float-right {\\n  float: right;\\n}\\n.my-24 {\\n  margin-top: 6rem;\\n  margin-bottom: 6rem;\\n}\\n.my-6 {\\n  margin-top: 1.5rem;\\n  margin-bottom: 1.5rem;\\n}\\n.mx-auto {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.my-16 {\\n  margin-top: 4rem;\\n  margin-bottom: 4rem;\\n}\\n.ml-\\\\[1\\\\/3\\\\] {\\n  margin-left: 1/3;\\n}\\n.-mb-48 {\\n  margin-bottom: -12rem;\\n}\\n.mt-24 {\\n  margin-top: 6rem;\\n}\\n.mb-12 {\\n  margin-bottom: 3rem;\\n}\\n.mb-4 {\\n  margin-bottom: 1rem;\\n}\\n.mt-8 {\\n  margin-top: 2rem;\\n}\\n.-ml-24 {\\n  margin-left: -6rem;\\n}\\n.-ml-8 {\\n  margin-left: -2rem;\\n}\\n.mt-4 {\\n  margin-top: 1rem;\\n}\\n.mb-8 {\\n  margin-bottom: 2rem;\\n}\\n.mb-2 {\\n  margin-bottom: 0.5rem;\\n}\\n.-ml-32 {\\n  margin-left: -8rem;\\n}\\n.-mt-12 {\\n  margin-top: -3rem;\\n}\\n.ml-auto {\\n  margin-left: auto;\\n}\\n.mt-12 {\\n  margin-top: 3rem;\\n}\\n.mb-24 {\\n  margin-bottom: 6rem;\\n}\\n.mb-36 {\\n  margin-bottom: 9rem;\\n}\\n.mb-40 {\\n  margin-bottom: 10rem;\\n}\\n.mt-16 {\\n  margin-top: 4rem;\\n}\\n.-mb-96 {\\n  margin-bottom: -24rem;\\n}\\n.mb-16 {\\n  margin-bottom: 4rem;\\n}\\n.ml-4 {\\n  margin-left: 1rem;\\n}\\n.block {\\n  display: block;\\n}\\n.inline-block {\\n  display: inline-block;\\n}\\n.flex {\\n  display: flex;\\n}\\n.grid {\\n  display: grid;\\n}\\n.contents {\\n  display: contents;\\n}\\n.h-auto {\\n  height: auto;\\n}\\n.h-36 {\\n  height: 9rem;\\n}\\n.h-20 {\\n  height: 5rem;\\n}\\n.h-full {\\n  height: 100%;\\n}\\n.h-2 {\\n  height: 0.5rem;\\n}\\n.h-6 {\\n  height: 1.5rem;\\n}\\n.h-12 {\\n  height: 3rem;\\n}\\n.h-40 {\\n  height: 10rem;\\n}\\n.h-64 {\\n  height: 16rem;\\n}\\n.min-h-\\\\[calc\\\\(100vh-4rem\\\\)\\\\] {\\n  min-height: calc(100vh - 4rem);\\n}\\n.min-h-screen {\\n  min-height: 100vh;\\n}\\n.w-60 {\\n  width: 15rem;\\n}\\n.w-\\\\[calc\\\\(100\\\\%\\\\+6rem\\\\)\\\\] {\\n  width: calc(100% + 6rem);\\n}\\n.w-36 {\\n  width: 9rem;\\n}\\n.w-20 {\\n  width: 5rem;\\n}\\n.w-\\\\[calc\\\\(100\\\\%\\\\+4rem\\\\)\\\\] {\\n  width: calc(100% + 4rem);\\n}\\n.w-48 {\\n  width: 12rem;\\n}\\n.w-full {\\n  width: 100%;\\n}\\n.w-\\\\[calc\\\\(100\\\\%\\\\+12rem\\\\)\\\\] {\\n  width: calc(100% + 12rem);\\n}\\n.w-28 {\\n  width: 7rem;\\n}\\n.w-64 {\\n  width: 16rem;\\n}\\n.w-6 {\\n  width: 1.5rem;\\n}\\n.w-72 {\\n  width: 18rem;\\n}\\n.w-24 {\\n  width: 6rem;\\n}\\n.w-32 {\\n  width: 8rem;\\n}\\n.w-96 {\\n  width: 24rem;\\n}\\n.w-\\\\[120\\\\%\\\\] {\\n  width: 120%;\\n}\\n.w-\\\\[140\\\\%\\\\] {\\n  width: 140%;\\n}\\n.w-12 {\\n  width: 3rem;\\n}\\n.w-40 {\\n  width: 10rem;\\n}\\n.min-w-full {\\n  min-width: 100%;\\n}\\n.max-w-md {\\n  max-width: 28rem;\\n}\\n.max-w-none {\\n  max-width: none;\\n}\\n.max-w-4xl {\\n  max-width: 56rem;\\n}\\n.max-w-2xl {\\n  max-width: 42rem;\\n}\\n.max-w-lg {\\n  max-width: 32rem;\\n}\\n.max-w-xl {\\n  max-width: 36rem;\\n}\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.grid-cols-2 {\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n}\\n.flex-row {\\n  flex-direction: row;\\n}\\n.flex-col-reverse {\\n  flex-direction: column-reverse;\\n}\\n.items-center {\\n  align-items: center;\\n}\\n.justify-center {\\n  justify-content: center;\\n}\\n.justify-between {\\n  justify-content: space-between;\\n}\\n.gap-8 {\\n  gap: 2rem;\\n}\\n.gap-16 {\\n  gap: 4rem;\\n}\\n.gap-12 {\\n  gap: 3rem;\\n}\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\n.space-y-48 > :not([hidden]) ~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(12rem * (1 - var(--tw-space-y-reverse)));\\n  margin-top: calc(12rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(12rem * var(--tw-space-y-reverse));\\n}\\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));\\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\\n}\\n.self-center {\\n  align-self: center;\\n}\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n.overflow-x-hidden {\\n  overflow-x: hidden;\\n}\\n.rounded-lg {\\n  border-radius: 0.5rem;\\n}\\n.rounded-xl {\\n  border-radius: 0.75rem;\\n}\\n.rounded-full {\\n  border-radius: 9999px;\\n}\\n.rounded-3xl {\\n  border-radius: 1.5rem;\\n}\\n.rounded {\\n  border-radius: 0.25rem;\\n}\\n.border-2 {\\n  border-width: 2px;\\n}\\n.border-red-light {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(245, 128, 106, var(--tw-border-opacity));\\n}\\n.border-black {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(40, 40, 40, var(--tw-border-opacity));\\n}\\n.border-green-dark {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(44, 93, 88, var(--tw-border-opacity));\\n}\\n.bg-warm-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(249, 244, 234, var(--tw-bg-opacity));\\n}\\n.bg-green-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(234, 237, 226, var(--tw-bg-opacity));\\n}\\n.bg-strategy-light {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(247, 167, 56, var(--tw-bg-opacity));\\n}\\n.bg-pink-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(252, 240, 251, var(--tw-bg-opacity));\\n}\\n.bg-red-light {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(245, 128, 106, var(--tw-bg-opacity));\\n}\\n.bg-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n}\\n.bg-green-dark {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(44, 93, 88, var(--tw-bg-opacity));\\n}\\n.bg-orange {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(255, 162, 1, var(--tw-bg-opacity));\\n}\\n.bg-blue-dark {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(50, 112, 169, var(--tw-bg-opacity));\\n}\\n.bg-design-light {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(218, 155, 196, var(--tw-bg-opacity));\\n}\\n.bg-black {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(40, 40, 40, var(--tw-bg-opacity));\\n}\\n.bg-opacity-10 {\\n  --tw-bg-opacity: 0.1;\\n}\\n.object-cover {\\n  object-fit: cover;\\n}\\n.object-center {\\n  object-position: center;\\n}\\n.p-16 {\\n  padding: 4rem;\\n}\\n.p-8 {\\n  padding: 2rem;\\n}\\n.p-1 {\\n  padding: 0.25rem;\\n}\\n.px-36 {\\n  padding-left: 9rem;\\n  padding-right: 9rem;\\n}\\n.py-3 {\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n}\\n.px-6 {\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n}\\n.py-24 {\\n  padding-top: 6rem;\\n  padding-bottom: 6rem;\\n}\\n.py-48 {\\n  padding-top: 12rem;\\n  padding-bottom: 12rem;\\n}\\n.py-36 {\\n  padding-top: 9rem;\\n  padding-bottom: 9rem;\\n}\\n.\\\\!px-4 {\\n  padding-left: 1rem !important;\\n  padding-right: 1rem !important;\\n}\\n.py-8 {\\n  padding-top: 2rem;\\n  padding-bottom: 2rem;\\n}\\n.pr-8 {\\n  padding-right: 2rem;\\n}\\n.pt-24 {\\n  padding-top: 6rem;\\n}\\n.pb-36 {\\n  padding-bottom: 9rem;\\n}\\n.pt-12 {\\n  padding-top: 3rem;\\n}\\n.pb-24 {\\n  padding-bottom: 6rem;\\n}\\n.pb-12 {\\n  padding-bottom: 3rem;\\n}\\n.font-serif {\\n  font-family: Source Serif Pro, serif;\\n}\\n.text-4xl {\\n  font-size: 2.25rem;\\n  line-height: 2.5rem;\\n}\\n.text-lg {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\\n.text-xl {\\n  font-size: 1.25rem;\\n  line-height: 1.75rem;\\n}\\n.text-3xl {\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\n.text-5xl {\\n  font-size: 3rem;\\n  line-height: 1;\\n}\\n.text-2xl {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n.text-6xl {\\n  font-size: 3.75rem;\\n  line-height: 1;\\n}\\n.font-bold {\\n  font-weight: 700;\\n}\\n.lowercase {\\n  text-transform: lowercase;\\n}\\n.text-red-dark {\\n  --tw-text-opacity: 1;\\n  color: rgba(252, 110, 66, var(--tw-text-opacity));\\n}\\n.text-gray {\\n  --tw-text-opacity: 1;\\n  color: rgba(117, 115, 115, var(--tw-text-opacity));\\n}\\n.text-blue-light {\\n  --tw-text-opacity: 1;\\n  color: rgba(64, 124, 203, var(--tw-text-opacity));\\n}\\n.text-blue-dark {\\n  --tw-text-opacity: 1;\\n  color: rgba(50, 112, 169, var(--tw-text-opacity));\\n}\\n.text-green-white {\\n  --tw-text-opacity: 1;\\n  color: rgba(234, 237, 226, var(--tw-text-opacity));\\n}\\n.text-green-dark {\\n  --tw-text-opacity: 1;\\n  color: rgba(44, 93, 88, var(--tw-text-opacity));\\n}\\n.text-green-light {\\n  --tw-text-opacity: 1;\\n  color: rgba(53, 135, 125, var(--tw-text-opacity));\\n}\\n.text-warm-white {\\n  --tw-text-opacity: 1;\\n  color: rgba(249, 244, 234, var(--tw-text-opacity));\\n}\\n.text-red-light {\\n  --tw-text-opacity: 1;\\n  color: rgba(245, 128, 106, var(--tw-text-opacity));\\n}\\n.text-black {\\n  --tw-text-opacity: 1;\\n  color: rgba(40, 40, 40, var(--tw-text-opacity));\\n}\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n.text-teal-bright {\\n  --tw-text-opacity: 1;\\n  color: rgba(90, 193, 174, var(--tw-text-opacity));\\n}\\n.text-teal-light {\\n  --tw-text-opacity: 1;\\n  color: rgba(93, 152, 168, var(--tw-text-opacity));\\n}\\n.outline {\\n  outline-style: solid;\\n}\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  width: 100%;\\n  border-radius: 0.5rem;\\n  border-width: 1px;\\n  --tw-border-opacity: 1;\\n  border-color: rgba(245, 128, 106, var(--tw-border-opacity));\\n  background-color: rgba(255,255,255,0);\\n  padding: 0.5rem;\\n  font-weight: 400;\\n  --tw-text-opacity: 1;\\n  color: rgba(40, 40, 40, var(--tw-text-opacity));\\n}\\ninput.focus-visible,\\noptgroup.focus-visible,\\nselect.focus-visible,\\ntextarea.focus-visible {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\\n  --tw-ring-color: rgba(252, 110, 66, var(--tw-ring-opacity));\\n  --tw-ring-opacity: 0.25;\\n}\\ninput.focus-visible,\\noptgroup.focus-visible,\\nselect.focus-visible,\\ntextarea.focus-visible {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\\n  --tw-ring-color: rgba(252, 110, 66, var(--tw-ring-opacity));\\n  --tw-ring-opacity: 0.25;\\n}\\ninput.focus-visible,\\noptgroup.focus-visible,\\nselect.focus-visible,\\ntextarea.focus-visible {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\\n  --tw-ring-color: rgba(252, 110, 66, var(--tw-ring-opacity));\\n  --tw-ring-opacity: 0.25;\\n}\\ninput:focus-visible,\\noptgroup:focus-visible,\\nselect:focus-visible,\\ntextarea:focus-visible {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\\n  --tw-ring-color: rgba(252, 110, 66, var(--tw-ring-opacity));\\n  --tw-ring-opacity: 0.25;\\n}\\n.wpcf7-form label {\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  font-weight: 700;\\n  --tw-text-opacity: 1;\\n  color: rgba(245, 128, 106, var(--tw-text-opacity));\\n}\\ntextarea {\\n  height: 10rem;\\n}\\n.wpcf7-submit {\\n  margin-left: 33.333%;\\n  width: 66.66667%;\\n  border-width: 2px;\\n  font-weight: 700;\\n  --tw-text-opacity: 1;\\n  color: rgba(245, 128, 106, var(--tw-text-opacity));\\n}\\n.has-large-font-size {\\n  margin-bottom: 1.5rem;\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n  font-weight: 700;\\n  line-height: 1.25;\\n}\\n.wp-block-media-text {\\n  gap: 1em;\\n}\\n.wp-block-media-text h2 {\\n  margin-bottom: 1rem;\\n  font-family: Source Serif Pro, serif;\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n  font-weight: 700;\\n}\\n.wp-block-media-text__content > h2 {\\n  margin-top: 0;\\n}\\n.wp-block-quote cite {\\n  display: block;\\n  font-family: Karla, sans-serif;\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n  font-style: normal;\\n  line-height: 1.25;\\n}\\n.wp-block-quote.is-style-plain {\\n  margin-top: 9rem;\\n  margin-bottom: 9rem;\\n  border-left-width: 0px;\\n  padding-left: 9rem;\\n  padding-right: 9rem;\\n}\\n.wp-block-media-text p {\\n  margin-bottom: 1rem;\\n}\\n.wp-block-button__link {\\n  text-decoration: none !important;\\n}\\n.wp-block-button__link {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n  color: black;\\n  margin-left: -2rem;\\n  display: inline-block;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n  border-top-right-radius: 9999px;\\n  border-bottom-right-radius: 9999px;\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(245, 128, 106, var(--tw-bg-opacity));\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n  padding-left: 2rem;\\n  padding-right: 4rem;\\n  font-weight: 600;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 500ms;\\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\\n}\\n.wp-block-button__link:visited {\\n  color: rgb(40, 40, 40 );\\n}\\n.wp-block-button__link:hover {\\n  --tw-text-opacity: 1;\\n  color: rgba(40, 40, 40, var(--tw-text-opacity));\\n}\\n.group:hover .wp-block-button__link {\\n  --tw-translate-y: 0.5rem;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.block-editor-block-list__layout {\\n  font-family: Karla, sans-serif !important;\\n  font-size: 1.125rem !important;\\n  line-height: 1.75rem !important;\\n  -webkit-font-smoothing: antialiased !important;\\n  -moz-osx-font-smoothing: grayscale !important;\\n}\\n.wp-block {\\n  margin-left: auto;\\n  margin-right: auto;\\n  max-width: 768px;\\n}\\n.wp-block.editor-post-title.editor-post-title__input {\\n  font-family: Karla, sans-serif !important;\\n  font-size: 3.75rem !important;\\n  line-height: 1 !important;\\n  font-weight: 800 !important;\\n}\\n.is-side .cf-block__fields {\\n  margin: 0 0 30px !important;\\n}\\n.is-side .cf-block__fields {\\n  padding: 10px;\\n  border: 1px solid #ddd;\\n  border-radius: 0.5em;\\n  overflow: hidden;\\n}\\n.is-side .cf-association__option-title-inner {\\n  position: relative;\\n}\\n.is-side .cf-association__cols {\\n  display: block;\\n}\\n.is-side .cf-association__cols::before {\\n  display: none;\\n}\\n.is-side .cf-association__col {\\n  width: 100%;\\n}\\n.is-side .cf-association__col + .cf-association__col {\\n  border-top: 1px solid #eee;\\n}\\n.focus\\\\:not-sr-only:focus {\\n  position: static;\\n  width: auto;\\n  height: auto;\\n  padding: 0;\\n  margin: 0;\\n  overflow: visible;\\n  clip: auto;\\n  white-space: normal;\\n}\\n.prose-headings\\\\:text-green-dark :where(h1, h2, h3, h4, h5, h6, th):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  --tw-text-opacity: 1;\\n  color: rgba(44, 93, 88, var(--tw-text-opacity));\\n}\\n.prose-h2\\\\:font-serif :where(h2):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-family: Source Serif Pro, serif;\\n}\\n.prose-h2\\\\:text-4xl :where(h2):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-size: 2.25rem;\\n  line-height: 2.5rem;\\n}\\n.prose-h2\\\\:font-normal :where(h2):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 400;\\n}\\n.prose-h3\\\\:font-bold :where(h3):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-weight: 700;\\n}\\n.prose-blockquote\\\\:border-green-light :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(53, 135, 125, var(--tw-border-opacity));\\n}\\n.prose-blockquote\\\\:font-serif :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-family: Source Serif Pro, serif;\\n}\\n.prose-blockquote\\\\:not-italic :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  font-style: normal;\\n}\\n.prose-blockquote\\\\:leading-snug :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  line-height: 1.375;\\n}\\n.prose-blockquote\\\\:text-green-dark :where(blockquote):not(:where([class~=\\\"not-prose\\\"] *)) {\\n  --tw-text-opacity: 1;\\n  color: rgba(44, 93, 88, var(--tw-text-opacity));\\n}\\n@media (min-width: 1024px) {\\n\\n  .lg\\\\:w-6\\\\/12 {\\n    width: 50%;\\n  }\\n\\n  .lg\\\\:w-9\\\\/12 {\\n    width: 75%;\\n  }\\n\\n  .lg\\\\:w-7\\\\/12 {\\n    width: 58.333333%;\\n  }\\n\\n  .lg\\\\:flex-row {\\n    flex-direction: row;\\n  }\\n\\n  .lg\\\\:py-24 {\\n    padding-top: 6rem;\\n    padding-bottom: 6rem;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .\\\\32xl\\\\:h-8 {\\n    height: 2rem;\\n  }\\n\\n  .\\\\32xl\\\\:w-8 {\\n    width: 2rem;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./node_modules/tailwindcss/base.css\",\"webpack://./node_modules/tailwindcss/components.css\",\"webpack://./node_modules/tailwindcss/utilities.css\",\"webpack://./resources/styles/common/_forms.css\",\"webpack://./resources/styles/common/global.css\",\"webpack://./resources/styles/editor.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@tailwind base;\\n\",\"@tailwind components;\\n\",\"@tailwind utilities;\\n\",\"input,\\noptgroup,\\nselect,\\ntextarea {\\n  @apply w-full p-2 border-red-light border rounded-lg bg-transparent text-black font-normal focus-visible:outline-none  focus-visible:ring-4 focus-visible:ring-red-dark focus-visible:ring-opacity-25;\\n}\\n\\n.wpcf7-form label {\\n  @apply grid grid-cols-[1fr_2fr] my-4 text-red-light font-bold;\\n}\\n\\ntextarea {\\n  @apply h-40;\\n}\\n\\n.wpcf7-submit {\\n  @apply ml-[33.333%] w-[66.66667%] border-2 font-bold text-red-light;\\n}\\n\",\"@import \\\"_fonts\\\";\\n@import \\\"_forms\\\";\\n\\n.has-large-font-size {\\n  @apply mb-6 text-2xl font-bold leading-tight;\\n}\\n\\n.wp-block-media-text {\\n  gap: 1em;\\n}\\n\\n.wp-block-media-text h2 {\\n  @apply mb-4 font-serif text-3xl font-bold;\\n}\\n\\n.wp-block-media-text__content > h2 {\\n  margin-top: 0;\\n}\\n\\n.wp-block-quote cite {\\n  @apply block text-2xl font-sans not-italic leading-tight;\\n}\\n\\n.wp-block-quote.is-style-plain {\\n  @apply border-l-0 my-36 px-36;\\n}\\n\\n.wp-block-media-text p {\\n  @apply mb-4;\\n}\\n\\n.wp-block-button__link {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n  color: black;\\n  text-decoration: none !important;\\n\\n  @apply -ml-8 inline-block transform rounded-r-full bg-red-light py-4 pl-8 pr-16  font-semibold antialiased transition duration-500 ease-out visited:text-black hover:text-black group-hover:translate-y-2;\\n}\\n\",\"@import \\\"tailwindcss/base\\\";\\n@import \\\"tailwindcss/components\\\";\\n@import \\\"tailwindcss/utilities\\\";\\n\\n@import \\\"common/global\\\";\\n\\n.block-editor-block-list__layout {\\n  @apply font-sans text-lg antialiased !important;\\n}\\n\\n.wp-block {\\n  @apply mx-auto max-w-screen-md;\\n}\\n\\n.wp-block.editor-post-title.editor-post-title__input {\\n  @apply font-sans text-6xl font-extrabold !important;\\n}\\n\\n.is-side .cf-block__fields {\\n  padding: 10px;\\n  border: 1px solid #ddd;\\n  margin: 0 0 30px !important;\\n  border-radius: 0.5em;\\n  overflow: hidden;\\n}\\n\\n.is-side .cf-association__option-title-inner {\\n  position: relative;\\n}\\n\\n.is-side .cf-association__cols {\\n  display: block;\\n}\\n\\n.is-side .cf-association__cols::before {\\n  display: none;\\n}\\n\\n.is-side .cf-association__col {\\n  width: 100%;\\n}\\n\\n.is-side .cf-association__col + .cf-association__col {\\n  border-top: 1px solid #eee;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sage/./resources/styles/editor.css?./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://sage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://sage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://sage/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/**\n * @license React\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\nvar REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\nvar REACT_MEMO_TYPE = Symbol.for('react.memo');\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/react-refresh/cjs/react-refresh-runtime.development.js?");

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/react-refresh/runtime.js?");

/***/ }),

/***/ "./resources/styles/editor.css":
/*!*************************************!*\
  !*** ./resources/styles/editor.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./editor.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/editor.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./editor.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/editor.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./editor.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/editor.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sage/./resources/styles/editor.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./resources/fonts/Karla-Bold.woff2":
/*!******************************************!*\
  !*** ./resources/fonts/Karla-Bold.woff2 ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:font/woff2;base64,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\";\n\n//# sourceURL=webpack://sage/./resources/fonts/Karla-Bold.woff2?");

/***/ }),

/***/ "./resources/fonts/Karla-Regular.woff2":
/*!*********************************************!*\
  !*** ./resources/fonts/Karla-Regular.woff2 ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:font/woff2;base64,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\";\n\n//# sourceURL=webpack://sage/./resources/fonts/Karla-Regular.woff2?");

/***/ }),

/***/ "./resources/fonts/SourceSerifPro-Regular.woff2":
/*!******************************************************!*\
  !*** ./resources/fonts/SourceSerifPro-Regular.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/SourceSerifPro-Regular.woff2\";\n\n//# sourceURL=webpack://sage/./resources/fonts/SourceSerifPro-Regular.woff2?");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __react_refresh_library__ */\n\nconst safeThis = __webpack_require__(/*! core-js-pure/features/global-this */ \"./node_modules/core-js-pure/features/global-this.js\");\nconst RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\");\n\nif (true) {\n  if (typeof safeThis !== 'undefined') {\n    var $RefreshInjected$ = '__reactRefreshInjected';\n    // Namespace the injected flag (if necessary) for monorepo compatibility\n    if (false) {}\n\n    // Only inject the runtime if it hasn't been injected\n    if (!safeThis[$RefreshInjected$]) {\n      // Inject refresh runtime into global scope\n      RefreshRuntime.injectIntoGlobalHook(safeThis);\n\n      // Mark the runtime as injected to prevent double-injection\n      safeThis[$RefreshInjected$] = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ansiRegex)\n/* harmony export */ });\nfunction ansiRegex({onlyFirst = false} = {}) {\n\tconst pattern = [\n\t    '[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)',\n\t\t'(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))'\n\t].join('|');\n\n\treturn new RegExp(pattern, onlyFirst ? undefined : 'g');\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ stripAnsi)\n/* harmony export */ });\n/* harmony import */ var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-regex */ \"./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js\");\n\n\nfunction stripAnsi(string) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError(`Expected a \\`string\\`, got \\`${typeof string}\\``);\n\t}\n\n\treturn string.replace((0,ansi_regex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), '');\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js?");

/***/ }),

/***/ 575:
/*!**********************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/dom-ready.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst domReady = onReady => {\n    window.requestAnimationFrame(async function check() {\n        document.body ? await onReady() : window.requestAnimationFrame(check);\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (domReady);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/dom-ready.js?");

/***/ }),

/***/ "./node_modules/@roots/sage/lib/client/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domReady\": () => (/* reexport safe */ _dom_ready_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"lazy\": () => (/* reexport safe */ _lazy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dom_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-ready.js */ 575);\n/* harmony import */ var _lazy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy.js */ \"./node_modules/@roots/sage/lib/client/lazy.js\");\n\n\n\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/index.js?");

/***/ }),

/***/ "./node_modules/@roots/sage/lib/client/lazy.js":
/*!*****************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/lazy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Default error handler\n *\n * @throws Error\n * @public\n */\nconst defaultErrorHandler = (err) => {\n    throw new Error(err);\n};\nconst lazy = async function lazy(module, handler, errorHandler) {\n    try {\n        const { default: request } = await module;\n        return await handler(request);\n    }\n    catch (err) {\n        const handle = errorHandler ? errorHandler : defaultErrorHandler;\n        handle(err);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazy);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/lazy.js?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("editor." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c9b018c2f7a674e64453")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							(result) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							(reason) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: () => (undefined),
/******/ 			signature: () => ((type) => (type)),
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 				register: () => (undefined)
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				var prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				var prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				var prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				var prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					var typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = () => (__webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform());
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"editor": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesage"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true");
/******/ 	__webpack_require__("./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Flemonbalm-wp.test%2F&replace=%2F");
/******/ 	__webpack_require__("./node_modules/react-refresh/runtime.js");
/******/ 	__webpack_require__("./resources/scripts/editor.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/styles/editor.css");
/******/ 	
/******/ })()
;