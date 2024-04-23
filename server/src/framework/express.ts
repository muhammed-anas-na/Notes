import express from 'express';
import cors from 'cors'
import session from 'express-session'
import { routes } from '../routes';
import cookieSession  from 'cookie-session'

declare module "express-session" {
    interface SessionData {
        email: string
    }
  }

const expressServer =(dependencies: any)=>{
    const app = express();
    
    app.use(cors(
        {
            origin:["https://muhammedanas.online" , "http://localhost:8080"],
            credentials:true
        }
    ))
    app.use(express.json())
    app.use(cookieSession({
        name: 'session',
        keys: ['key1', 'key2'],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
          httpOnly: false,
        },
    }))
    app.use(express.urlencoded());
    app.use('/api/user' , routes(dependencies))
    // app.use(errorMiddleware)
    app.listen(3000 , ()=> console.log("Server listening at port 3000"))
}
export default expressServer;