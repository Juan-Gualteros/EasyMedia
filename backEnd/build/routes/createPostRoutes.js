"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPostController_1 = require("../controllers/createPostController");
class createPost {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', createPostController_1.CreatePostControllers.create);
    }
}
const CreatePost = new createPost();
exports.default = CreatePost.router;
