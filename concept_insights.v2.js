'use strict';

var watson = require('watson-developer-cloud');

var concept_insights = watson.concept_insights({
  url : "https://watson-api-explorer.mybluemix.net/concept-insights/api",
  username: '',
  password: '',
  version: 'v2'
});

var params = {
  graph: '/graphs/wikipedia/en-20120601',
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

// Retrieve the concepts for input text
concept_insights.graphs.annotateText(params, function(err, res) {
  if (err)
    console.log(err);
  else {
    console.log('Annotated Text');
    console.log(JSON.stringify(res, null, 2));
  }
});
