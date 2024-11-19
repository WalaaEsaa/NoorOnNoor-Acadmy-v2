const express = require('express')
const router = express.Router()
const lectureScheduleController=require('../Controllers/lectureSchedule')
const authntication=require('../Middleware/authntication')
//API to get all lectureSchedule
//Api to get one lectureSchedule
//API to delete lectureSchedule -admin
//API to update lectureSchedule- login
//API to add lectureSchedule -admin


//API to get all lectureSchedule-login
router.get('/api/lectureSchedule',authntication, lectureScheduleController.getAllQuranAttendance)
//Api to get one lectureSchedule according class  login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneCQuranAttendance)
//Api to get one lectureSchedule according  teacher login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneTQuranAttendance)
//Api to get one lectureSchedule according  day login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneDQuranAttendance)

//API to delete lectureSchedule -executive supervisor
router.delete('/api/lectureSchedule/:id',authntication,lectureScheduleController.deleteQuranAttendance)
//API to update lectureSchedule- login
router.put('/api/lectureSchedule/:id',authntication,lectureScheduleController.updateQuranAttendance)

//API to add lectureSchedule - executive supervisor 
router.post('/api/lectureSchedule',authntication,lectureScheduleController.createQuranAttendance)


module.exports=router