'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');
var http = require('http');

var visual_recognition = watson.visual_recognition({
  url: 'https://gateway-a.watsonplatform.net/visual-recognition/api',
  api_key: 'd2834f0879e7c19aa3c76af3840b6ac33587c21a',
  version: 'v3',
  version_date: '2016-05-19'
});

		
var params = {
  url : "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/44_barack_obama%5B1%5D.jpg" 
};

visual_recognition.detectFaces(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
