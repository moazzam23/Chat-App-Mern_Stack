export const ErrorHandler=(err,req,res,next)=>{
err.message ||= "Internal Server Error";
err.statusCode ||= 500;

return res.status(err.statusCode).json({
  success:false,
  message:err.message,  
})
}


export const TryCatch =(passfunction)=> async( req, res, next )=>{
try {
    passfunction(req,res,next)
    
} catch (error) {
    next(error)
}
}