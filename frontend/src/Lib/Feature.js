import moment from "moment";


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

const ImageTransformation=(url="",width=100)=>url;


const Last7days=()=>{
    const currentDate= moment();
    const Last7day=[];

    for(let i=0;i<7;i++){
      const days = currentDate.clone().subtract(i, 'days');
      const DayName = days.format("dddd");

      Last7day.unshift(DayName)
    }
    return Last7day;
}


export { FileFormat, ImageTransformation,Last7days};