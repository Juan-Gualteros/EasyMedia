import { Router } from 'express';

import {registerControllers} from '../controllers/registerController';

class register {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
    
        this.router.post('/', registerControllers.create);
     
    }

}

const Register = new register();
export default Register.router;