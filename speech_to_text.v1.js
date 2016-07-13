'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');
var http = require('http')

var watson = require('watson-developer-cloud');
var fs = require('fs');

var speech_to_text = watson.speech_to_text({
  username: 'f0d59211-e88f-4b14-b2b0-fd4d1f7df231',
  password: 'YNA4VcN1AaXY',
  version: 'v1'
});

var http = require('http');
var fs = require('fs');


http.request("http://raw.githubusercontent.com/watson-developer-cloud/node-sdk/master/examples/resources/speech.wav", function(res) {
    res.pipe(writeStream);
});

speech_to_text.recognize(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});

// or streaming
fs.createReadStream("speech.wav")
  .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
  .pipe(fs.createWriteStream('./transcription.txt'));
