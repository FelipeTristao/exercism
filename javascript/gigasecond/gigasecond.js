var Gigasecond = function (date){
  this.dob = date;

  this.date = function(){
    console.log(this.dob.getTime());
    return new Date(this.dob.getTime() + Math.pow(10, 12));
  }
};

module.exports = Gigasecond;
