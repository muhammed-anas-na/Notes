import express from 'express';
import userRoutes from './userRoutes/user.routes';
export const routes = (dependencies:any)=>{
    const routes = express.Router();
    routes.use('/' , userRoutes(dependencies))
    return routes;
}
