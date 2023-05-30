import {request, Request, Response } from 'express';
import pool from '../database';


class myPostControllers{

    public async getMyPosts (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const posts = await pool.query('SELECT * from posts INNER JOIN users on posts.id_user = users.id_user where posts.id_user = ?', [id]);
        res.json(posts);
    }




}

export const MyPostControllers = new myPostControllers();
