const express =require('express');
const {generateURL, redirectURL,getAnalytics}=require('../controllers/controllers')

const router=express.Router();

router.get('/url/:shortId',redirectURL);

router.post('/url',generateURL);

router.get('/analytics/:shortId',getAnalytics);

module.exports=router;

