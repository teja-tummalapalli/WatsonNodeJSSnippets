'use strict';

var watson = require('watson-developer-cloud');
var async  = require('async');

var retrieve = watson.retrieve_and_rank({
	url : "https://watson-api-explorer.mybluemix.net/retrieve-and-rank/api",
	username: '',
	password: '',
    url: 'https://gateway.watsonplatform.net/retrieve-and-rank/api',
    version : 'v1'
    	
});

async.series([
  function listClusters(done) {
    console.log('Listing Solr clusters.');
    retrieve.listClusters({}, function(err, res) {
      printResponse(err, 'Error listing Solr clusters: ', res, done);
    });
  },

]);


function printResponse(error, errorMessage, response, callback) {
  if (error) {
    if (error.code) {
      console.log(errorMessage + JSON.stringify(error, null, 2));
    } else {
      console.log(errorMessage + error);
    }
  } else {
    console.log(response);
  }
  callback();
}
