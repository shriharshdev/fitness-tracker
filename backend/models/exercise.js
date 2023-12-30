const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    name:{type:String, required:true},
    reps:{type:Number, requied:true},
    sets:{type:Number, required:true},
    // user:{type:Schema.Types.ObjectId, ref:"Users", required:true},
    calories:{type:Number, required:true}
})

module.exports = mongoose.model("Exercise",ExerciseSchema)