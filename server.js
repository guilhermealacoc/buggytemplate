const express = require('./src/app');


app.listen(4000, (err) =>{
    if(err) {
        return console.log('erro')
    }
    console.log('iniciou em http://localhost:4000')
});