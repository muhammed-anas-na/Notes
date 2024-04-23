export const createAccount_usecase = (dependencies: any)=>{
    console.log(dependencies);
    const {repositories:{userRepository}} = dependencies;
    if(!userRepository) throw new Error("User Repository not found");

    const execute = async(data: object)=>{
        const userExist = await userRepository.findByEmail(data);
        if(!userExist){
            const response = await userRepository.createUser(data);
            return response;
        }
        return userExist;
    }
    return {execute};
}