'use strict';

var watson = require('watson-developer-cloud');
var fs     = require('fs');

var natural_language_classifier = watson.natural_language_classifier({  
	  url : "https://watson-api-explorer.mybluemix.net/concept-insights/api",
	  username: '',
	  password: '',
	  version: 'v1'
});

// Using a classifier
natural_language_classifier.classify({
  text: 'Is it sunny?',
  classifier_id: '2374f9x69-nlc-7541' }, // from the previous command
  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
