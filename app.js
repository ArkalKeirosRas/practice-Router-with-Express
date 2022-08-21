const { infoCourses } = require('./data/cursos')
const express = require('express');
const app = express();

const routerMaths = require('./routers/math');
app.use('/api/courses/maths/',routerMaths);

const {routerProgrammation} = require('./routers/programmation');
 app.use('/api/courses/programmation',routerProgrammation);


// ROUTING PROGRAMMATION
 app.get('/api/courses',(req,res)=>{
   res.send(JSON.stringify(infoCourses))
 });

const PORT = process.env.PORT || 3000;

app.listen(3000,()=>{
  console.log(`the server is listening in the port: ${PORT}`);
});

