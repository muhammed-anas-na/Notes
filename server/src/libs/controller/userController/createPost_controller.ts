import { Request,Response,NextFunction } from "express";

export default (dependencies: any)=>{
    const createPost = async(req: Request,res: Response,next: NextFunction) => {
        try{
            const {useCases:{createPost_usecase}} = dependencies;
            const email = req.session.email;
            const response = await createPost_usecase(dependencies).execute({...req.body , email});
            res.json({message:response})
        }catch(err){
            next(err);
        }
    }

    return createPost;
}