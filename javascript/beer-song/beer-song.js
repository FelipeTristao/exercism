var BeerSong = function() {

  this.verse = function(index) {
    if(index.NaN) {
      return false;
    }

    var result;

    if(index > 2){
      console.log(index + "bottles");
      result = index + " bottles of beer on the wall, "+ index +" bottles of beer.\nTake one down and pass it around, " + (index - 1) + " bottles of beer on the wall.\n";
    }
    else if(index == 0) {
      result = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    else if(index == 1) {
      result = "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }
    else if(index == 2){
      result = index + " bottles of beer on the wall, "+ index +" bottles of beer.\nTake one down and pass it around, " + index - 1 + " bottle of beer on the wall.\n";
    }
    else {
      return false;
    }

    return result;
  };

  this.sing = function(verse1, verse2) {
    console.log('hey');
    if(!verse2.NaN) {
      this.verse(verse1);
      this.verse(verse2);
    }
    else {
      for(var c = verse1; c > 0; c - 1){
        this.verse(c);
      }
    }
  };
};



module.exports = BeerSong;
