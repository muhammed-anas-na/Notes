export const updateNotes_usecase = (dependencies: any)=>{
    console.log(dependencies);
    const {repositories:{postRepository}} = dependencies;
    if(!postRepository) throw new Error("Post Repository not found");

    const execute = async(data: object)=>{
        const response = await postRepository.updateNotes(data)
        return response;
    }
    return {execute};
}