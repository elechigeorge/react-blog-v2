// importing modules
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import path from 'path';
import mongoose from 'mongoose';

// load routes paths
import Register from "./routes/register";
import Login from "./routes/login";
import Post from './routes/post';
import Comment from './routes/comment';

// initialize environment variables
dotenv.config();

// initialisation 
const server: Application = express();

// middlewares setup
server.use(methodOverride("_method"));
server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use('/uploads', express.static(path.join(__dirname, '/uploads')))
server.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }))
server.use((request: Request, response: Response, next: NextFunction) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    if (request.method === "OPTIONS") {
        response.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, GET, OPTIONS, DELETE"
        );
        return response.status(200).json({});
    }

    next();
});

// database connection 
mongoose
    .connect(process.env.MONGOURI || "")
    .then(connectionResponse => console.log(`Database Connected ${connectionResponse}`))
    .catch(connectionError => console.error(`Database Connection Error ${connectionError}`))

// load/register applications routes
server.use('/register', Register);
server.use('/login', Login);
server.use('/post', Post);
server.use('/comment', Comment);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static 
    server.use(express.static(path.resolve(__dirname, "./client/build")));

    server.get('*', (_, res: Response, next: NextFunction) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));

        next();
    })
}

// server ports and host informations
const PORT = process.env.PORT || 5000
const HOST = undefined

// serve applications server
server.listen(PORT, () => console.log("Server Resources are now available on http://localhost:5000"))