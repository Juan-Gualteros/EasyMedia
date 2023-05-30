import { Router } from 'express';

import {loginController} from '../controllers/loginController';

class login {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',loginController.getUser);
        this.router.post('/',loginController.login);
    }

}

const Login = new login();
export default Login.router;