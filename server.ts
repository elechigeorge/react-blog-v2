// importing modules
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import path from 'path';
const resolve = path.resolve()
import mongoose from 'mongoose';

// load routes paths
import Register from "./routes/register";
import Login from "./routes/login";
import Post from './routes/post';
import Comment from './routes/comment';
import Reaction from './routes/reaction';
import Upload from './middleware/upload';

// initialize environment variables
dotenv.config();

// initialisation 
const server: Application = express();

// middlewares setup
server.use(methodOverride("_method"));
server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use('/uploads', express.static(path.join(__dirname, '/uploads')));
server.use(express.static(path.join(__dirname, "./client/build")));
server.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }))

server.get("/*", (_, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));

    next();
})



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
server.use('/reaction', Reaction);
server.use('/upload', Upload);




// serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // set static 
//     server.use(express.static(path.resolve(__dirname, "./client/build")));

//     server.get('*', (_, res: Response, next: NextFunction) => {
//         res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));

//         next();
//     })
// }

// code to be removed 




// server ports and host informations
const PORT = process.env.PORT || 5050

// serve applications server
server.listen(PORT, () => console.log("Server Resources are now available on http://localhost:5050"))