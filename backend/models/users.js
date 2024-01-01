const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsersSchema = new Schema({
    name: {type:String, required:true, maxLength:100},
    weight: {type:Number, required:true},
    height: {type:Number, required:true},
})

UsersSchema.virtual("url").get(function (){
    return `/gym/user/${this._id}`
})

module.exports = mongoose.model("Users", UsersSchema)
