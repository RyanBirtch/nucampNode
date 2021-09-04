const express = require('express')
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end("will send all partners to you")
})
.post((req,res)=>{
    res.end(`Will add partner: ${req.body.name} with description: ${req.body.description}`)
})
.put((req,res)=>{
    res.statusCode=403;
    res.end('PUT operation not supported /promotions')
})
.delete((req,res)=>{
    res.end('deleting all partners');
})

partnerRouter.route('/:partnerId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res)=>{
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`)
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`)
})
.put((req,res)=>{
    res.write(`updating the partner: ${req.params.partnerId}`)
    res.end(`will update the campsite: ${req.body.name} with description ${req.body.description}`)
})
.delete((req,res)=>{
    res.end(`deleting partner: ${req.params.partnerId}`)
})

module.exports = partnerRouter;