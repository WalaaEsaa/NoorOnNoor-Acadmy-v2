
const { message } = require('statuses')
const lectureScheduleSchema=require('../Schema/lectureSchedule')


//API to get all lectureSchedule-login
exports.getAllQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find()
        res.json({message:"Done",data:quranAttendance})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//Api to get one quranAttendance according class name login
exports.getOneCQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({class:req.body.class})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one lectureSchedule according  teacher login

exports.getOneTQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({teacherName:req.body.teacherName})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one lectureSchedule according  day login
exports.getOneDQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({day:req.body.day})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//API to delete lectureSchedule -executive supervisor

exports.deleteQuranAttendance=async function(req,res){
    try{
        await lectureScheduleSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}

//API to update lectureSchedule- login

exports.updateQuranAttendance=async function(req,res){
    try{
        await lectureScheduleSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}

//API to add lectureSchedule - executive supervisor 

exports.createQuranAttendance=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdQuranAttendance=await lectureScheduleSchema.create(req.body)
            res.json({message:"Done",data:createdQuranAttendance})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}







