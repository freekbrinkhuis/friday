const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api', function(req, res){
    res.set('Content-Type', 'application/json');
    res.send('{"message": "Hello world"');
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../friday/build', 'index.html'));
})

app.listen(port, function(){
    console.log('listening to ${PORT}');
})