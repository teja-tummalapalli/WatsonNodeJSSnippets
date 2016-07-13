'use strict';

var watson = require('watson-developer-cloud');

var alchemy_data_news = watson.alchemy_data_news({
  api_key: '5fc91e98eacfa5ebf83440e8c6a61d0f60fa380b'
});

// News about company acquisitions in the past 24 hours:
// More information: http://docs.alchemyapi.com/docs/introduction
var params = {
  start: 'now-1d',
  end: 'now',
  count: 100,

};

alchemy_data_news.getNews(params, function (err, news) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(news, null, 2));
});