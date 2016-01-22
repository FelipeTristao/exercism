//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var reg_question = /.*\?$/;
  var reg_shout = /^[^\u00E0-\u00FFa-z]*[A-Z]+[\d\W]*$/g;
  var reg_silence = /^\s*$/g;

  var answer = "Whatever.";

  if(input.match(reg_shout)){
    answer = "Whoa, chill out!";
  }
  else if(input.match(reg_question)){
    answer = "Sure.";
  }
  else if(input == '' || input.match(reg_silence)){
    answer = "Fine. Be that way!";
  }

  return answer;
};

module.exports = Bob;
