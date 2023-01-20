
// 
const auth = async (req,res,next)=>{

    try {
       let decodedData =JSON.parse(req.headers.user);
        req.userId=decodedData.sub;
        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;