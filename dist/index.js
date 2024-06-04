"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
//Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first rout of app
app.get('/', (Resquest, Response) => {
    Response.send('Welcome to API Restful: Express + Nodemon + Jest + TS + Swagger + Mongoose');
});
//Execute app and Listen Requests to the PORT
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
//# sourceMappingURL=index.js.map