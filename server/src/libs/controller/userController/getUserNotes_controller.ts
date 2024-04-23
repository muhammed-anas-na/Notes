import { Request,Response,NextFunction } from "express";

export default (dependencies: any)=>{
    const getUserNotes_controller = async(req: Request,res: Response,next: NextFunction) => {
        try{
            const {useCases:{getUserNotes_usecase}} = dependencies;
            const email = req.session.email;
            const response = await getUserNotes_usecase(dependencies).execute(email);
            res.json(response)
        }catch(err){
            next(err);
        }
    }

    return getUserNotes_controller;
}