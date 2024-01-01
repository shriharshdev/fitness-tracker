const User = require("../models/users")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require('express-validator')

exports.user_list = asyncHandler(async(req,res,next) => {
    users = await User.find().exec()
    res.render("user_list",{
        title:"Users List",
        users:users
    })  
})

exports.user_details = asyncHandler(async(req,res,next) => {
    users = await User.findById(req.params.id).exec()
    res.render("user_detail",{
        title:"User Details",
        users:users,
    })
})

exports.user_form_get = asyncHandler(async(req,res,next) => {
    res.render("user_form",{
        title:"Add User"
    })
})

exports.user_form_post = [
    body("name").trim().isLength({min:1}).escape().withMessage("Name is required"),
    body("weight").trim().isLength({min:2}).escape().withMessage("Weight should be in 2 digits and in numerical format"),
    body("height").trim().isLength({max:3}).escape().withMessage("Enter the height in cms"),

    asyncHandler(async(req,res,next) => {
        const errors = validationResult(req)

        const user = new User({
            name:req.body.name,
            weight:req.body.weight,
            height:req.body.height
        })
        if(!errors.isEmpty()){
            res.render("user_form",{
                title:"Add User",
                user:user,
                errors:errors.array(),
            })
        } else {
            await user.save()
            res.redirect("/gym/exercise")
        }
    })
]