const express = require('express');
const app = express();
const  {infoCourses} = require('./data/courses');
const programmingRoute = require('./router/programming');

app.use('/api/courses/programming',programmingRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`'the server is listening in the port: ${PORT}'`)
})