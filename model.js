// require mongoose
const mongoose = require("mongoose")

// configure your model
const schema = mongoose.Schema({
name:{type:String,required:true},
score:{type:Number,required:true,max:100},
remark:{type:String}

})

const studentModel = mongoose.model("studentScore",schema)
module.exports = studentModel