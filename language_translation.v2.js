var watson = require('watson-developer-cloud');
var language_translation = watson.language_translation({
  version: 'v2',
  url:'https://watson-api-explorer.mybluemix.net/language-translation/api',
  username: '', // '{YOUR SERVICE USERNAME}',
  password: '' //'{YOUR SERVICE PASSWORD}'
});
language_translation.translate({
    text: 'hello',
    source: 'en',
    target: 'es'
  }, function(err, translation) {
    if (err)
      console.log(err)
    else
    	console.log(translation);
  }); 