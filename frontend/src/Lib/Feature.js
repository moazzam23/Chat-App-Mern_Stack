

const FileFormat =(url="")=> {
    const fileext= url.split(".").pop();

    if(fileext === "mp4" || fileext === "webm" || fileext === "ogg" )
    return "vedio";
    if(fileext === "mp3" || fileext === "wave")
    return "audio";
    if(fileext === "gif" || fileext === "jpg" || fileext === "png" || fileext === "jpeg" )
    return "image";

    return "file";
}

const ImageTransformation=(url="",width=100)=>url

export { FileFormat, ImageTransformation};