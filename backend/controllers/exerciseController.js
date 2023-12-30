const Exercise = require("../models/exercise")
const asyncHandler = require("express-async-handler")

exports.exercise_form_get = asyncHandler(async(req,res,next) => {
    res.send("Exercise Form")
})

exports.exercise_form_post = asyncHandler(async(req,res,next) => {
    res.send("Exercise form")
})