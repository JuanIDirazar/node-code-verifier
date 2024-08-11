import express, { Express, Request, Response } from "express";
// Swagger
import swaggerUi from 'swagger-ui-express';
// Environment Variables
import dotenv from "dotenv";
// Security
import cors from 'cors';
import helmet from 'helmet';
// Root Routes
import rootRouter from '../routes';
import mongoose from "mongoose";
import { LogError, LogSuccess, LogWarning } from "../utils/logger";

// Load environment variables
dotenv.config();

// Create Express App
const server: Express = express();
let PORT: number = parseInt(process.env.PORT || '8000', 10);

// * Swagger Configuration and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
            explorer: true,
        }
    })
);

// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// From this point onward: http://localhost:8000/api/...
server.use('/api', rootRouter);

// Static Server
server.use(express.static('public'));


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/codeverification')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Security Config
server.use(helmet());
server.use(cors());

// Content Type Config:
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));

// Función para iniciar el servidor
const startServer = () => {
    server.listen(PORT, () => {
        LogSuccess(`[SERVER ON]: Running at http://localhost:${PORT}/api`);
    }).on('error', handleServerError);
};

// Manejo de errores del servidor
const handleServerError = (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
        LogError(`[SERVER ERROR]: The port ${PORT} is already in use.`);
        PORT += 1; // Incrementar el puerto
        LogWarning(`Trying new port ${PORT}...`);
        startServer(); // Intentar iniciar el servidor con el nuevo puerto
    } else {
        LogError(`[SERVER ERROR]: ${error.message}`);
        process.exit(1);
    }
};

// Manejo de excepciones no capturadas y rechazos de promesas
process.on('uncaughtException', (error: any) => {
    if (error.code === 'EADDRINUSE') {
        LogError(`[UNCAUGHT EXCEPTION]: The port ${PORT} is already in use.`);
        PORT += 1; // Incrementar el puerto
        LogWarning(`Trying new port ${PORT}...`);
        startServer(); // Intentar iniciar el servidor con el nuevo puerto
    } else {
        LogError(`[UNCAUGHT EXCEPTION]: ${error.message}`);
        process.exit(1);
    }
});

process.on('unhandledRejection', (reason, promise) => {
    LogError(`[UNHANDLED REJECTION]: ${reason}`);
    // Manejo de errores personalizado o reinicio del servidor
});

// Iniciar el servidor
startServer();

// Redirection Config
// http://localhost:8000/   --> http://localhost:8000/api
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;
