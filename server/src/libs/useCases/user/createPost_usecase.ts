export const createPost_usecase = (dependencies: any)=>{
    const {repositories:{postRepository}} = dependencies;
    if(!postRepository) throw new Error("Post Repository not found");

    const execute = async(data: object)=>{
        const response = await postRepository.createPost(data);
        return response;
    }
    return {execute};
}