import { Request,Response,NextFunction } from "express";

export default (dependencies: any)=>{
    const updateNote_controller = async(req: Request,res: Response,next: NextFunction) => {
        try{
            const {useCases:{updateNotes_usecase}} = dependencies;
            const response = await updateNotes_usecase(dependencies).execute(req.body);
            res.json(response)
        }catch(err){
            next(err);
        }
    }
    return updateNote_controller;
}