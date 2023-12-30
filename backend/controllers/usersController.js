const User = require("../models/users")
const asyncHandler = require("express-async-handler")

exports.user_form_get = asyncHandler(async(req,res,next) => {
    res.send("User Form")
})

exports.user_form_post = asyncHandler(async(req,res,next) => {
    res.send("User form")
})
