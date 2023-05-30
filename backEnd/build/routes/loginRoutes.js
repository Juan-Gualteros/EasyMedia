"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
class login {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', loginController_1.loginController.getUser);
        this.router.post('/', loginController_1.loginController.login);
    }
}
const Login = new login();
exports.default = Login.router;
