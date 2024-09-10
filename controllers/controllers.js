const URL=require('../models/models');
const shortid=require('shortid');

async function generateURL(req,res){
    const body=req.body;
    if(!body){
        res.send("url required");
    }
    const shortId=shortid();

    const result=await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[]
    })

    res.render('index',{
        id:shortId
    })

}

async function redirectURL(req,res){
    const shortId=req.params.shortId;
    const url=await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })

    res.redirect(url.redirectUrl);
    
    
}

async function getAnalytics(req,res){
    const shortId=req.params.shortId;
    const data=await URL.findOne({shortId});
    res.json({
        clickCount:data.visitHistory.length,
        analytics:data.visitHistory
    })
}

module.exports={generateURL,redirectURL,getAnalytics};