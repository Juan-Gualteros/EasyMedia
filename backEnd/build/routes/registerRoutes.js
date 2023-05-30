"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = require("../controllers/registerController");
class register {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', registerController_1.registerControllers.create);
    }
}
const Register = new register();
exports.default = Register.router;
