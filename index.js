require('dotenv').config();

const bodyParser=require('body-parser');

const express=require('express');

const app = express();

const {Pool} =require('pg')

app.use(bodyParser.json())

const pool=new Pool ({
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD,
    port:process.env.PGPORT
})


app.get('/', (req, res)=>{
    res.send('hallo')
})

app.get('/api/recipes', (req, res)=>{
    pool
    .query('SELECT * FROM recipes')
    .then(data=>res.json(data.rows))
})




const port=process.env.PORT ||  3000;




app.listen(port, ()=>{
    console.log('listen to port')
})