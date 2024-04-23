import { Request,Response,NextFunction } from "express";

export default (dependencies: any)=>{
    const getNoteData_controller = async(req: Request,res: Response,next: NextFunction) => {
        try{
            const {useCases:{getNoteData_usecase}} = dependencies;
            const response = await getNoteData_usecase(dependencies).execute();
            res.json(response)
        }catch(err){
            next(err);
        }
    }

    return getNoteData_controller;
}