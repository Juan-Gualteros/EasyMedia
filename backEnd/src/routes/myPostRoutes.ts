import { Router } from 'express';

import {MyPostControllers} from '../controllers/myPostController';

class myPost {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:id',MyPostControllers.getMyPosts);
      
    }

}

const MyPost = new myPost();
export default MyPost.router;