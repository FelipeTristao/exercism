var WordCount = function () {};

WordCount.prototype.count = function(str) {
  str = str.trim().replace(/[\s\t\n]+/g, ' ');
  var words = str.split(' ');

  var result = {};

  while(words.length > 0 ){
    var word = words.splice(0, 1);
    console.log(word);
    counter = 1;

    for(y = 0; y < words.length; y++){
      if (words[y] == word){
        words.splice(y, 1);
        counter++;
      }
    }

    result[word] = counter;

    console.log(result);
  }

  return result;
}

module.exports = WordCount;
