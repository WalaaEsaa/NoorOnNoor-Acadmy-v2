const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sbjectSchema = new Schema({
   subjectID:Number,
   subjectName: String
   
   
    
     
})

module.exports=mongoose.model('Subject',sbjectSchema)