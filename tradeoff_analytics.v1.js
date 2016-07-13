'use strict';

var watson = require('watson-developer-cloud');
var request = require('request')
var fs = require('fs')

var tradeoff_analytics = watson.tradeoff_analytics({
  username: 'edbc7589-6582-40de-844d-c40d41bcc75a',
  password: '3voltFJzlqSx',
  version: 'v1'
});


request('https://raw.githubusercontent.com/watson-developer-cloud/node-sdk/master/examples/resources/problem.json')
	.pipe(fs.createWriteStream('problem.json'))
	
//From File.
var params = require("./problem.json")

tradeoff_analytics.dilemmas(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
