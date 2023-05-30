import {request, Request, Response } from 'express';
import pool from '../database';


class RegisterControllers{

   
    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({message: 'User saved'});
    }

 

}

export const registerControllers = new RegisterControllers();
