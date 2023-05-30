import { Router } from 'express';

import {CreatePostControllers} from '../controllers/createPostController';

class createPost {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/',CreatePostControllers.create);
       
    }

}

const CreatePost = new createPost();
export default CreatePost.router;