const express = require('express')
const product = require('./routers/productroute')
const { dbConnect } = require('./config/dbconfig')
const app = express()


app.use(express.json())
app.use("/", product)


const port = 4000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

dbConnect() .then(function(){
    console.log("database connection successful");
})