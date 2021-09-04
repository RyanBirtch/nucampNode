const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req,res,next) =>{ 
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((res,req)=>{
    res.end("will send all promotions to you")
})
.post((res,req)=>{
    res.end(`Will add the promotion: ${req.body.name}, with description ${req.body.description}`)
})
.put((res,req)=>{
    res.statusCode=403;
    res.end('PUT operations not supported on /promotions')
})
.delete((res,req)=>{
    res.end('deleting all promos')
})

promotionRouter.route('/:promotionId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', "text/plain");
    next();
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`)
})
.get((req,res)=>{
    res.end(`Will send details of the promotion ${req.params.promotionId} to you`)
})
.put((req,res)=>{
    res.write(`updating the promotion: ${req.params.promotionId} \n`)
    res.end(`Will update the promo ${req.body.name} with description ${req.body.description}`)
})
.delete((req,res)=>{
    res.end(`deleting promotion ${req.params.promotionId}`)
})

module.exports = promotionRouter;