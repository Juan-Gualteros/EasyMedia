"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const allPostController_1 = require("../controllers/allPostController");
class allPost {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', allPostController_1.AllPostControllers.getPosts);
    }
}
const AllPost = new allPost();
exports.default = AllPost.router;
