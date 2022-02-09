"use strict";
exports.__esModule = true;
// call core modules
var path_1 = require("path");
var express_1 = require("express");
var multer_1 = require("multer");
// initialize express router
var router = express_1["default"].Router();
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, "".concat(file.fieldname, "-").concat(Date.now()).concat(path_1["default"].extname(file.originalname)));
    }
});
function checkFileType(file, cb) {
    var filetypes = /jpg|jpeg|png/;
    var extname = filetypes.test(path_1["default"].extname(file.originalname).toLowerCase());
    var mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    else {
        cb('Images only!');
    }
}
var upload = (0, multer_1["default"])({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});
router.post('/', upload.single('images'), function (req, res) {
    res.send("/".concat(req.file && req.file.path));
});
exports["default"] = router;
