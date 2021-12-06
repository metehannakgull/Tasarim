const fileModel=require('./fileModel')
/*************************************************************** */
exports.get_all =(req,res)=>{ 
    //res.send('files')  
    fileModel.find()
      .then(files=>{
          res.status(200).json({
              files
          })
      })
      .catch(error=> {
          res.status(400).json({
              message:'error',
              error:error,
              mongoose:error.errmsg
          })
      })
    
}
exports.upload = (req, res)=>{
   // res.send('upload')
    //console.log(req.file)
   //console.log(req.headers)
   
   const title=req.headers.title
   const fileUrl= req.file.filename
 // const fileUrl='./uploads/files/${req.file.filename}' çalışmadı 
   const fileType=req.file.originalname.split('.')[1]

   const newFile=new fileModel({
       title,fileUrl,fileType
   })
   newFile.save()
   .then(response=> {
       res.status(200).json({
           message:'Files uploaded successfully.',
           id:response._id,
           response
       })
   })
   .catch(error =>{
       res.status(400).json({
           message:'ERROR',
           error:error,
           mongoose:error.errmsg
       })
   })
  //console.log(title+fileUrl+fileType)
}
exports.file_count =(req,res) =>{
    res.send('file_count')
}
/************************************************************************** */
exports.get_all2 =(req,res)=>{ 
    res.send('bookletGetAll')  
     
}
exports.upload2 = (req, res)=>{
     res.send('bookletUpload')
  
 }
/**************************************************************************** */
exports.get_all3 =(req,res)=>{ 
    res.send('studentNumberGetAll')  
     
}
exports.upload3 = (req, res)=>{
    res.send('studentNumberUpload')
 
}
/***************************************************************************** */
exports.get_all4 =(req,res)=>{ 
    res.send('informationGetAll')  
     
}
exports.upload4 = (req, res)=>{
    res.send('informationUpload')
 
};
/***************************************************************************** */