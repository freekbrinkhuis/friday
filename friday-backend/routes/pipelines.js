var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
		name: "PipeLine 1",
		last_deployment: '1505913071'
	},
	{
  	id: 2,
		name: "PipeLine 2",
		last_deployment: '1505826671'
  }]);
});

module.exports = router;
