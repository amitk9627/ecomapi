const app=require('./app.js');
const mongoose=require('mongoose');


const mongoDB= async ()=>{
   await mongoose.connect("mongodb://localhost:27017/backend");
}
mongoDB().then(()=>console.log("DB connected")).catch(()=>console.log("DB disconnected"));
app.listen(3001,()=>{
    console.log("Listening port 3001");
});