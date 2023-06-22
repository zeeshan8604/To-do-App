const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/To_dolist')
.then(()=> console.log("mongo db connected"))
.catch((err)=> console.log("mongo error", err));
const db = mongoose.connection;