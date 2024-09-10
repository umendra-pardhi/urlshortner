const mongoose=require('mongoose');

async function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB connected');
    }).catch(
        (err)=>{
            console.log('An Error occured for MongoDB connection');
        }
    )

}

module.exports=connectDB;