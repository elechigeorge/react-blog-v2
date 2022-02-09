"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing modules
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const method_override_1 = __importDefault(require("method-override"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
// load routes paths
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const post_1 = __importDefault(require("./routes/post"));
const comment_1 = __importDefault(require("./routes/comment"));
const reaction_1 = __importDefault(require("./routes/reaction"));
const upload_1 = __importDefault(require("./middleware/upload"));
// initialize environment variables
dotenv_1.default.config();
// initialisation 
const server = (0, express_1.default)();
// middlewares setup
server.use((0, method_override_1.default)("_method"));
server.use((0, cors_1.default)());
server.use(express_1.default.json({ limit: '50mb' }));
server.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '/uploads')));
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
// server.get("/*", (_, res: Response, next: NextFunction) => {
//     res.sendFile(path.join(__dirname, "./client/build", "index.html"));
//     next();
// })
// database connection 
mongoose_1.default
    .connect(process.env.MONGOURI || "")
    .then(connectionResponse => console.log(`Database Connected ${connectionResponse}`))
    .catch(connectionError => console.error(`Database Connection Error ${connectionError}`));
// load/register applications routes
server.use('/register', register_1.default);
server.use('/login', login_1.default);
server.use('/post', post_1.default);
server.use('/comment', comment_1.default);
server.use('/reaction', reaction_1.default);
server.use('/upload', upload_1.default);
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    server.use(express_1.default.static('client/build'));
    // Express serve up index.html file if it doesn't recognize route
    server.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// server ports and host informations
const PORT = process.env.PORT || 5050;
// serve applications server
server.listen(PORT, () => console.log("Server Resources are now available on http://localhost:5050"));
