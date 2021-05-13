const express=require('express')

const app=express();

const indexRoute=require('./routes/indexRoute')

app.use(indexRoute);

app.listen(3000,()=>{

    console.log('Server started at 3000')

})