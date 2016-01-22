function DnaTranscriber(){};

DnaTranscriber.prototype.toRna = function(input){
  if(!input) throw new Error('Invalid input.');

  var transcribed = input;

  for(var x = 0; x < input.length; x++){
    switch (transcribed[x]) {
      case 'G':
        transcribed = transcribed.replaceAt(x, 'C');
        break;
      case 'C':
        transcribed = transcribed.replaceAt(x, 'G');
        break;
      case 'T':
        transcribed = transcribed.replaceAt(x, 'A');
        break;
      case 'A':
        transcribed = transcribed.replaceAt(x, 'U');
        break;
      default:
        throw new Error('Invalid nucleotide.');
        break;
    }
  }
  return transcribed;
}

String.prototype.replaceAt = function(index, ch) {
  return this.substr(0, index) + ch + this.substr(index + ch.length);
};

module.exports = DnaTranscriber;
