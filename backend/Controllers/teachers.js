const {json} = require('body-parser')
const  teachersModel=require('../Schema/teachers')
const bcrypt=require('bcryptjs') //bcryptJS
const jwt=require('jsonwebtoken')
const { message } = require('statuses')
   
exports.register = async function (req, res) {
    try{
        let newTeacher=new teachersModel(req.body)
        //hash password
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        newTeacher.password=hashedPassword

        let createTeacher=await newTeacher.save()
        res.json({message: "student added Successfully",teachers:createTeacher})
    }catch(error){
        res.status(400).json({message:"error",data:error})

    }
}
 

exports.login = async function (req, res) {  
    try {  
        // Find student by national ID and wait for the result  
        let teachers = await teachersModel.findOne({ email: req.body.email });  
        // console.log('Student found:', student); // Log the retrieved student  
        if (!teachers) {  
            return res.status(401).json({ message: "Invalid national ID or password  " });  
        }  

        //retrive stored password from database into variable
        //async await here how?????
        const storedPassword=teachers.password
        let passwordCheck=  bcrypt.compare(req.body.password, storedPassword)
        if (!passwordCheck) {  
            return res.status(401).json({ message: "Invalid national ID or password " });  
        }  

                        
        
        // Generate JWT token  
        const token = jwt.sign({ _id: teachers._id, email: teachers.email }, 'secret');  
        res.status(200).json({  
            message: "Student logged in",  
            student: { 
                name: teachers.name, 
                email: teachers.email,
                 token }  
        });  
    } catch (err) {  
        console.error(err);  // Log the error for debugging  
        res.status(400).json({ message: "Error in login", error: "An error occurred during login" });  
    }  
}

