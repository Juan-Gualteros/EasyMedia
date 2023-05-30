import {request, Request, Response } from 'express';
import pool from '../database';


class allPostControllers{

    public async getPosts (req: Request, res: Response): Promise<void>{
        
        const posts = await pool.query('SELECT * from posts INNER JOIN users on posts.id_user = users.id_user ');
        res.json(posts);
    }




}

export const AllPostControllers = new allPostControllers();
