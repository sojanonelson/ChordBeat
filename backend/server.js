require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors')
const setupDB = require("./utils/db")

setupDB()
app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/',(req,res)=>{
    res.send('ChordBeat server is running')
})

app.listen(4000,()=>{
    console.log('ChordBeat server is running on port 4000')
})