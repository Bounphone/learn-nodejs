const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({msg : 'Hello from server'});
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});