var express = require('express');
var request = require('request');
var router = express.Router();


//se va a construir la url http://localhost:3000/marvel/api/comic/
router.get('/listar',(req,res,next)=>{
    request.get('http://localhost:3000/marvel/api/comic',(err,response,body)=>{
        if (err) res.status(404).json({mensaje:"Error al consumir get comic"});
        else res.render('comic_view',{'datos':JSON.parse(body) });
    });
});

module.exports = router;
