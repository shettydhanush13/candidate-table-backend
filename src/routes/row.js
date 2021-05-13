const express = require('express');
const router = express.Router();
const Tasks = require('../models/row');
const { v4: uuidv4 } = require('uuid');
// const { emailuser } = require("../helpers")

router.route('/')
    .post(async(req, res) => {
        const tasks = new Tasks();
        tasks.rowId = uuidv4()
        tasks.name = ""
        tasks.email = ""
        tasks.appointment_date = new Date()
        tasks.move_forward = ""
        tasks.interview_transcription = ""
        tasks.action_result = ""
        await tasks.save()
        const taskResponse = await Tasks.find({}) 
        res.json(taskResponse)
    })

    .get(async(req, res) => {
        const taskResponse = await Tasks.find({}) 
        res.json(taskResponse)
    })

router.route('/:rowId')
    .delete(async(req, res) => {
        await Tasks.findOneAndDelete({ rowId : req.params.rowId }) 
        const taskResponse = await Tasks.find({}) 
        res.json(taskResponse)
    })

    .put(async(req, res) => {
        console.log(req.body.move_forward, req.body.action_result)
        if(req.body.move_forward === "yes" && req.body.action_result !== "Email sent") {
            // const emailResponse =  await emailuser(req.body)
            // req.body.action_result = emailResponse.message
        }
        await Tasks.findOneAndUpdate({ rowId : req.params.rowId } , { $set : req.body })
        const taskResponse = await Tasks.find({}) 
        res.json(taskResponse)
    })

module.exports = router