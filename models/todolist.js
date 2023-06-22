const mongoose =require('mongoose');
const todoSchema =new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required :true
    },
    dueDate:{
        type:String,
        required:true
    }
})

const Todolist=mongoose.model('Todolist', todoSchema);
module.exports=Todolist;