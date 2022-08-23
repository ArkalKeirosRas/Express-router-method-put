const express = require('express');
const programmingRoute = express.Router();
const { programming } = require('../data/courses').infoCourses;

// Middleware
 programmingRoute.use(express.json());

programmingRoute.get('/',(req,res)=>{
  res.send('hello world')
})

programmingRoute.put('/:id',(req,res)=>{
  const updateCourse = req.body
  const id = req.params.id;

  const index = programming.findIndex(res => res.id == id);
  if(index >= 0){
    programming[index] = updateCourse;
  }
  res.send(JSON.stringify(programming));
})

// had an error when exporting it in this other way "module.exports.programmingRoute = programmingRoute"
// So better export it this way 
// and we import it in app.js structured 
// or vice versa 

module.exports = programmingRoute;
