var prompt = require('prompt');
var fs = require('fs');
var people = require('./pairData.json').nodes;
var findId = function(name) {
  var foundId;
  people.forEach(function(item, index, array) {
    if (item.name === name) {
      foundId = item.id;
    }
  });
  return foundId;
};

prompt.start();

prompt.get(['firstpair', 'secondpair',], function (err, result) {
  var first = findId(result.firstpair);
  var second = findId(result.secondpair);
  console.log('{"source":'+ first + ',"target":' + second + ',"value":1}');
  fs.appendFile('pair.json', '{"source":'+ first + ',"target":' + second + ',"value":1},\n', function (err) {
    //console.log(err);
  });
});

