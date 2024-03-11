import multer from "multer";

export const MulterUpload= multer({
    limits:{
        fileSize: 1024 * 1024 *5,
    }
})