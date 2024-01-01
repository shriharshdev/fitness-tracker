const Exercise = require("../models/exercise")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require("express-validator")

exports.exercise_form_get = asyncHandler(async(req,res,next) => {
    res.render("exercise_form",{
        title:"Add exercise"
    })
})


exports.exercise_form_post = [
    body("name").trim().isLength({min:1}).escape().withMessage("Name is required"),
    body("sets").trim().escape().isLength({min:1}).withMessage("Enter the number of sets"),
    body("reps").trim().escape().isLength({min:1}).withMessage("Enter the number of reps"),
    body("calories").trim().escape().isLength({min:1}).withMessage("Enter the number of calories burned"),

    asyncHandler(async(req,res,next) => {
        const errors = validationResult(req)

        const exercise = new Exercise({
            name:req.body.name,
            sets:req.body.sets,
            reps:req.body.reps,
            //user:req.params.id,
            calories:req.body.calories,
        })
        if(!errors.isEmpty()){
            res.render("exercise_form",{
                title:"Add exercise",
                exercise:exercise,
                errors:errors
            })
        } else {
            await exercise.save()
            res.redirect("/")
        }
    })
]
