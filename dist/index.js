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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst server_1 = __importDefault(__webpack_require__(/*! ./src/server */ \"./src/server/index.ts\"));\nconst logger_1 = __webpack_require__(/*! ./src/utils/logger */ \"./src/utils/logger.ts\");\n//Configuration the .env file\ndotenv_1.default.config();\nconst port = process.env.PORT || 8000;\n// * Execute SERVER\nserver_1.default.listen(port, () => {\n    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);\n});\n//* Control SERVER\nserver_1.default.on('error', (error) => {\n    (0, logger_1.LogError)(`[SERVER ERROR]: ${error}`);\n});\n\n\n//# sourceURL=webpack://code-verifier/./index.ts?");

/***/ }),

/***/ "./src/controller/HelloController.ts":
/*!*******************************************!*\
  !*** ./src/controller/HelloController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HelloController = void 0;\nconst tsoa_1 = __webpack_require__(/*! tsoa */ \"tsoa\");\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\nlet HelloController = class HelloController {\n    /**\n     * Endpoint to retrieve a message \"Hello, {name}!\" in JSON\n     * @param {string | undefined} name Name of user to be greeted\n     * @returns {BasicResponse} Promise of BasicResponse\n     */\n    getMessage(name) {\n        return __awaiter(this, void 0, void 0, function* () {\n            (0, logger_1.LogSuccess)(`[/api/hello] Get Request with name: ${name}`);\n            return {\n                message: `Hello, ${name || 'World'}!`\n            };\n        });\n    }\n};\nexports.HelloController = HelloController;\n__decorate([\n    (0, tsoa_1.Get)(\"/\"),\n    __param(0, (0, tsoa_1.Query)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", Promise)\n], HelloController.prototype, \"getMessage\", null);\nexports.HelloController = HelloController = __decorate([\n    (0, tsoa_1.Route)(\"/api/hello\"),\n    (0, tsoa_1.Tags)(\"HelloController\")\n], HelloController);\n\n\n//# sourceURL=webpack://code-verifier/./src/controller/HelloController.ts?");

/***/ }),

/***/ "./src/routes/HelloRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/HelloRouter.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst HelloController_1 = __webpack_require__(/*! ../controller/HelloController */ \"./src/controller/HelloController.ts\");\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\n// Router from express\nlet helloRouter = express_1.default.Router();\n// http://localhost:8000/api/hello?name=Juan/\nhelloRouter.route('/')\n    //GET\n    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a;\n    //Obtain a Query Param\n    let name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;\n    (0, logger_1.LogInfo)(`Query Param: ${name}`);\n    //Controller Instance to execute method\n    const controller = new HelloController_1.HelloController();\n    //Obtain the response from the controller\n    const response = yield controller.getMessage(name);\n    //Send the response\n    return res.send(response);\n}));\n//Export the Router\nexports[\"default\"] = helloRouter;\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/HelloRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n/*\n*Root Router\n*Redirections to Routers\n*/\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst HelloRouter_1 = __importDefault(__webpack_require__(/*! ../routes/HelloRouter */ \"./src/routes/HelloRouter.ts\"));\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\n// Server Instance\nlet server = (0, express_1.default)();\n// Router Instance\nlet rootRouter = express_1.default.Router();\n// Active for requests to http://localhost:8000/api\n//GET http://localhost:8000/api/\nrootRouter.get('/', (req, res) => {\n    (0, logger_1.LogInfo)('GET: http://localhost:8000/api/');\n    // Send Hello World\n    res.send('Welcome to API Restful: Express + Nodemon + Jest + TS + Swagger + Mongoose');\n});\n// Redirections to Routers & Controllers\nserver.use('/', rootRouter); //http://localhost:8000/api\nserver.use('/hello', HelloRouter_1.default); //http://localhost:8000/api/hello --> HelloRouter\n//Add more redirections here\nexports[\"default\"] = server;\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/index.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n//Swagger\nconst swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\"));\n//Security\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\nconst routes_2 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\")); // Import the rootRouter variable from the '../routes' file\n//Create Express App\nconst app = (0, express_1.default)();\nconst port = process.env.PORT || 8000;\n// * Swagger Configuration and route\napp.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {\n    swaggerOptions: {\n        url: '/swagger.json',\n        explorer: true,\n    }\n}));\n//Define SERVER to use \"/api\" and use rootRouter from 'index.ts' in routes\n//From this point onover: http://localhost:8000/api/...\nroutes_1.default.use('/api', routes_2.default);\n//Static Server\nroutes_1.default.use(express_1.default.static('public'));\n//TODO Mongoose Connection\n//Security Config\nroutes_1.default.use((0, helmet_1.default)());\nroutes_1.default.use((0, cors_1.default)());\n// Content Type Config:\nroutes_1.default.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));\nroutes_1.default.use(express_1.default.json({ limit: '50mb' }));\n//Redirection Config\n// http://localhost:8000/   --> http://localhost:8000/api\nroutes_1.default.get('/', (req, res) => {\n    res.redirect('/api');\n});\nexports[\"default\"] = routes_1.default;\n\n\n//# sourceURL=webpack://code-verifier/./src/server/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LogWarning = exports.LogError = exports.LogSuccess = exports.LogInfo = void 0;\nconst LogInfo = (message) => {\n    console.log(`Info: \\x1b[34m${message}\\x1b[0m`);\n};\nexports.LogInfo = LogInfo;\nconst LogSuccess = (message) => {\n    console.log(`Success: \\x1b[32m${message}\\x1b[0m`);\n};\nexports.LogSuccess = LogSuccess;\nconst LogError = (message) => {\n    console.log(`Error: \\x1b[31m${message}\\x1b[0m`);\n};\nexports.LogError = LogError;\nconst LogWarning = (message) => {\n    console.log(`Warning: \\x1b[33m${message}\\x1b[0m`);\n};\nexports.LogWarning = LogWarning;\n\n\n//# sourceURL=webpack://code-verifier/./src/utils/logger.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("tsoa");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;