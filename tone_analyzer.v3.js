'use strict';

var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({  
 url : "https://watson-api-explorer.mybluemix.net/tone-analyzer/api",
 username: '',
 password: '',
  version: 'v3',
  version_date: '2016-05-19'
});

tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
});