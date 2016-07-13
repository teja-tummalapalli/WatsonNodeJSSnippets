'use strict';

var watson = require('watson-developer-cloud');

var relationship_extraction = watson.relationship_extraction({
	url : "https://watson-api-explorer.mybluemix.net/relationship-extraction-beta/api",
	username: '',
	password: '',
  version: 'v1-beta'
});

relationship_extraction.extract({
  text: 'IBM Watson developer cloud',
  dataset: 'ie-en-news' },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
