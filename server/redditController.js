var request = require('request');

module.exports = {
  endWorld: function(req, res){
    var URL="https://www.reddit.com/r/EnoughTrumpSpam+HillaryForPrison+IDontLikeRPolitics+Mr_Trump+The_Donald+conspiracy+hillaryclinton+politics/new.json";
    request(URL, (err, response, body)=>{
      if(err){
        handleError(response, err.message, 'What happen', 500);
      }
      else{
        var content = JSON.parse(body);
        res.send(JSON.stringify(content.data.children));
      }
    })
  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}

