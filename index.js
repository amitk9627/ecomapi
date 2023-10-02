const app=require('./app.js');
const mongoose=require('mongoose');
require('dotenv').config();

const mongoDB= async ()=>{
   await mongoose.connect(process.env.mongoDBurl);
}
mongoDB().then(()=>console.log("DB connected")).catch(()=>console.log("DB disconnected"));
app.listen(3001,()=>{
    console.log("Listening port 3001");
});