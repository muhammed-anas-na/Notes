import { Request,Response,NextFunction } from "express";

export default (dependencies: any)=>{
    const createAccount = async(req: Request,res: Response,next: NextFunction) => {
        try{
            const {useCases:{createAccount_usecase}} = dependencies;
            const response = await createAccount_usecase(dependencies).execute(req.body);
            req.session.email = response.email;
            console.log("Response in createAccount" , response);
            res.json({message:response})
        }catch(err){
            next(err);
        }
    }

    return createAccount;
}