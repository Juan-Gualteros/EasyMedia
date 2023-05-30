import {Request, Response } from 'express';

class IndexControllers{

    public index (req: Request, res: Response){
        res.json({text: 'API is /api/login or /api/register'});
    }  

}

export const indexController = new IndexControllers();