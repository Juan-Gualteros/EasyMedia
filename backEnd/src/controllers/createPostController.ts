import {request, Request, Response } from 'express';
import pool from '../database';


class createPostControllers{

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO posts set ?', [req.body]);
        res.json({message: 'Post saved'});
    }

  
    




}

export const CreatePostControllers = new createPostControllers();
