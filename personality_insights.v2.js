'use strict';

var watson = require('watson-developer-cloud');
var fs     = require('fs');

var personality_insights = watson.personality_insights({
  url : 'https://watson-api-explorer.mybluemix.net/personality-insights/api',
  username: '',
  password: '',
  version: 'v2'
});

/*
 * English example:
 *   'text' parameter contains the input text.
 */
personality_insights.profile({
  text: "Call me Ishmael. Some years ago-never mind how long "
      + "precisely-having little or no money in my purse, and nothing "
      + "particular to interest me on shore, I thought I would sail about "
      + "a little and see the watery part of the world. It is a way "
      + "I have of driving off the spleen and regulating the circulation. "
      + "Whenever I find myself growing grim about the mouth; whenever it "
      + "is a damp, drizzly November in my soul; whenever I find myself "
      + "involuntarily pausing before coffin warehouses, and bringing up "
      + "the rear of every funeral I meet; and especially whenever my "
      + "hypos get such an upper hand of me, that it requires a strong "
      + "moral principle to prevent me from deliberately stepping into "
      + "the street, and methodically knocking people's hats off-then, "
      + "I account it high time to get to sea as soon as I can."},
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
