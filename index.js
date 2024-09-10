const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
dotenv.config();

const connectDB=require('./database/connection');
const router=require('./routes/routes');
const URL=require('./models/models')
connectDB();

const app=express();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use(express.static(path.resolve('public')));


app.get('/',async (req,res)=>{
    const data=await URL.find({})
    res.render('index',{
        url:data
    });
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);






app.listen(process.env.PORT,()=>{console.log('server started at http://localhost')});