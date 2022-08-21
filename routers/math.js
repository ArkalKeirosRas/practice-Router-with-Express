const express = require('express');
const routerMaths = express.Router();
const { math } = require('../data/cursos').infoCourses;

routerMaths.get('/',(req,res)=>{
    res.send(JSON.stringify(math))
  });
  
  routerMaths.get('/:theme',(req,res)=>{
    const theme = req.params.theme;
    const result = math.filter(course => course.theme === theme);
    if(result === 0){
      res.status(404).send(`the course of: ${theme} is not available`);
    };
    res.send(JSON.stringify(result))
  });

  module.exports = routerMaths;