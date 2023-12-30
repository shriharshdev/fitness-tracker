const express = require("express")
const router = express.Router()
const exercise = require("../controllers/exerciseController")
const user = require("../controllers/usersController")

router.get("/exercise",exercise.exercise_form_get)
router.post("/exercise",exercise.exercise_form_post)

router.get("/user",user.user_form_get)
router.post("/user",user.user_form_post)

module.exports = router