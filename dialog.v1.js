'use strict';

var watson = require('watson-developer-cloud');

var dialog = watson.dialog({
	url : "https://watson-api-explorer.mybluemix.net/dialog/api",
	username: '',
	password: '',
  version: 'v1'
});

dialog.getDialogs({}, function (err, dialogs) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(dialogs, null, 2));
});
