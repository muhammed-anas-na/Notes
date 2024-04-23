export const getUserNotes_usecase = (dependencies: any)=>{
    console.log(dependencies);
    const {repositories:{postRepository}} = dependencies;
    if(!postRepository) throw new Error("User Repository not found");

    const execute = async(email: string)=>{
        const response = await postRepository.getUserNotesByEmail(email)
        return response;
    }
    return {execute};
}