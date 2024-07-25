"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
//Configuration the .env file
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// * Execute SERVER
(0, logger_1.LogSuccess)("Initializing server setup...");
server_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);
    (0, logger_1.LogSuccess)("Starting server...");
});
//# sourceMappingURL=index.js.map