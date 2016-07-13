'use strict';

var watson = require('watson-developer-cloud');

var alchemy_language = watson.alchemy_language({
  api_key: '5fc91e98eacfa5ebf83440e8c6a61d0f60fa380b'
});

var params = {
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

alchemy_language.sentiment(params, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});