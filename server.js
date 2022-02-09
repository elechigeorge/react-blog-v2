"use strict";
exports.__esModule = true;
// importing modules
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var method_override_1 = require("method-override");
var path_1 = require("path");
var mongoose_1 = require("mongoose");
// load routes paths
var register_1 = require("./routes/register");
var login_1 = require("./routes/login");
var post_1 = require("./routes/post");
var comment_1 = require("./routes/comment");
var reaction_1 = require("./routes/reaction");
var upload_1 = require("./middleware/upload");
// initialize environment variables
dotenv_1["default"].config();
// initialisation 
var server = (0, express_1["default"])();
// middlewares setup
server.use((0, method_override_1["default"])("_method"));
server.use((0, cors_1["default"])());
server.use(express_1["default"].json({ limit: '50mb' }));
server.use('/uploads', express_1["default"].static(path_1["default"].join(__dirname, '/uploads')));
server.use(express_1["default"].static(path_1["default"].join(__dirname, "./client/build")));
server.use(express_1["default"].urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
server.get("/*", function (_, res, next) {
    res.sendFile(path_1["default"].join(__dirname, "./client/build", "index.html"));
    next();
});
// database connection 
mongoose_1["default"]
    .connect(process.env.MONGOURI || "")
    .then(function (connectionResponse) { return console.log("Database Connected ".concat(connectionResponse)); })["catch"](function (connectionError) { return console.error("Database Connection Error ".concat(connectionError)); });
// load/register applications routes
server.use('/register', register_1["default"]);
server.use('/login', login_1["default"]);
server.use('/post', post_1["default"]);
server.use('/comment', comment_1["default"]);
server.use('/reaction', reaction_1["default"]);
server.use('/upload', upload_1["default"]);
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
var PORT = process.env.PORT || 5050;
// serve applications server
server.listen(PORT, function () { return console.log("Server Resources are now available on http://localhost:5050"); });
