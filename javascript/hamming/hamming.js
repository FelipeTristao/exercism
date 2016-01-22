var Hamming = function(){};

Hamming.prototype.compute = function(strandA, strandB){
  if (strandA.length !== strandB.length) { throw new Error('DNA strands must be of equal length.'); };

  var distance = 0;

  for(var x = 0; x < strandA.length; x++){
    if(strandA[x] !== strandB[x]){
      distance ++;
    }
  }

  return distance;
};

module.exports = Hamming;
