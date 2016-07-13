'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');

var document_conversion = watson.document_conversion({
	url : "https://watson-api-explorer.mybluemix.net/document-conversion/api",
	username: '',
	password: '',
    version_date: '2015-12-01',
    version : 'v1'
});


var http = require('http');
var fs = require('fs');
var request = require('request')

request('http://raw.githubusercontent.com/watson-developer-cloud/node-sdk/master/examples/resources/example.html')
	.pipe(fs.createWriteStream('file2.html'))

document_conversion.convert({
  // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
  file: fs.createReadStream("file2.html"),
  conversion_target: document_conversion.conversion_target.ANSWER_UNITS,
  config: {
    // split the html file by "h2", "h3" and "h4" tags
    html_to_answer_units: {
      selectors: [ 'h2','h3', 'h4']
    }
  }
}, function (err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});
