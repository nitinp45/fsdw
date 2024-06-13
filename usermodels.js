const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/create')
  .then(() => {
    console.log('Connected to server');
  })
  .catch((e) => {
    console.log('No connection', e);
  });

//now we create a schema
const employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    Username:String
})


module.exports=mongoose.model("employee",employeeSchema);