import express, {Application, application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import authorsRoutes from './routes/loginRoutes';
import loginRoutes from './routes/loginRoutes';
import registerRoutes from './routes/registerRoutes';
import createPostRoutes from './routes/createPostRoutes';
import allPostRoutes from './routes/allPostRoutes';
import myPostRoutes from './routes/myPostRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/register',registerRoutes);
        this.app.use('/api/create-post',createPostRoutes);
        this.app.use('/api/all-posts',allPostRoutes);
        this.app.use('/api/my-posts',myPostRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>{
            console.log( 'Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();