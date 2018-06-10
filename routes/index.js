var express = require('express');
var router = express.Router();
var request = require('request')
var config = require('../config/all')
//var home =  require('./home');


router.get('/', (req, res)=>

	request(config.protocol +"://"+ config.host+"/"+config.version+config.urls.content_types+config.content_types+config.urls.entries
		+"?"+"api_key="+config.api_key+"&"+"access_token="+config.access_token+"&"+"environment="+config.environments, { json: true }, (err, res, body) => {
		  if (err) { return console.log(err); }
          console.log(body)		  
	}));


module.exports = router;
