var redditController = require('./redditController');

module.exports = function (app, express){
  app.get('/insanity', redditController.endWorld);


};

