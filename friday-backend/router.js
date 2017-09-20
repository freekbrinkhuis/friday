var expresss = require('express');
var router = express.Router();

router.use(function logTime(req, res, next){
    console.log('request on: ' + Date.now());
    next();
});

router.get('/pipelines', function(req, res){
    
});