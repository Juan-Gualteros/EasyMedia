import { Router } from 'express';

import {AllPostControllers} from '../controllers/allPostController';

class allPost {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',AllPostControllers.getPosts);
      
    }

}

const AllPost = new allPost();
export default AllPost.router;