const express  = require('express')
require('dotenv').config();
const router = require('./router/route')

const app = express();
port = process.env.PORT
app.use(express.json())
// for rotuer
app.use(router);


app.listen(port,()=>{
    console.log(`server is running on http://192.168.1.103:${port}`)
})