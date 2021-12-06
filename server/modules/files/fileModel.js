const mongoose=require('mongoose')
const fileSchema=mongoose.Schema({ //veritabanı oluşturma
    title:{
        required: true,
        max:50,
        type:String,
        lowercase: true
    },
    fileUrl:{
        required:true,
        max:255,
        type:String,
        lowercase: true
    },
    fileType:{
        required: true,
        type:String,
        max:20,
        lowercase: true
    }
})
/************************************************************** */
const bookletSchema=mongoose.Schema({ //veritabanı oluşturma
    title:{
        required: true,
        max:1,
        type:String,
        uppercase: true
    }  
})
/************************************************************** */
const studentNumberSchema=mongoose.Schema({ //veritabanı oluşturma
    title:{
        required: true,
        max:10,
        type:String
    }  
})
/******************************************************************* */
const informationSchema=mongoose.Schema({ //veritabanı oluşturma
    name:{
        required: true,
        max:30,
        type:String
    },
    surname:{
        required: true,
        max:30,
        type:String
    },
    lessonName:{
        required: true,
        max:30,
        type:String
    },
    branch:{
        required: true,
        max:5,
        type:String
    }

})
/********************************************************************** */
module.exports=mongoose.model('DenemeFilesCollection',fileSchema)
module.exports=mongoose.model('DenemeBookletCollection',bookletSchema)
module.exports=mongoose.model('DenemeStudentNumberCollection',studentNumberSchema)
module.exports=mongoose.model('DenemeInformationCollection',informationSchema)