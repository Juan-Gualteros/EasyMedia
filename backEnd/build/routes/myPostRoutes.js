"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myPostController_1 = require("../controllers/myPostController");
class myPost {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', myPostController_1.MyPostControllers.getMyPosts);
    }
}
const MyPost = new myPost();
exports.default = MyPost.router;
