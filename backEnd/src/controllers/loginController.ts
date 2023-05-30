import {request, Request, Response } from 'express';
import pool from '../database';


class loginControllers{

    
    public async login(req: Request, res: Response): Promise<any>{
       
        const user = await pool.query(`SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`);
        if(user.length > 0) {
            return res.json(user);
        }
        res.status(404).json({text: "The user does't exist"});
    }
   
    public async getUser(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM users WHERE id_user = ?', [id]);
        res.json(user)
       
    }
    




}

export const loginController = new loginControllers();
