const express = require('express');
const routerProgrammation = express.Router();
const { programation } = require('../data/cursos').infoCourses;

routerProgrammation.get('/',(req,res)=>{
    res.send(JSON.stringify(programation))
  })
  
  routerProgrammation.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    console.log(lenguaje)
    const result = programation.filter(course => course.lenguaje === lenguaje);
    if(result.length === 0){
      return res.status(404).send(`the course the   <b> "${lenguaje}" </b>  is not available`);
    };
    if (req.query.ordenar === 'vistas'){
      return res.send(JSON.stringify(result.sort((a,b)=> a.views - b.views )))
    };
    res.send(JSON.stringify(result))
    console.log(req.query.ordenar);
    res.send(JSON.stringify(result));
  });

  module.exports.routerProgrammation = routerProgrammation;
  