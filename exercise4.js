// Exercise 4.
// --------------------------------------------------------

function sum(string){
var array = string.split(':');
var tot = array.reduce(function(a, b){
  return a*1 + b*1;
});
return tot;
}

var result = sum("2:7:1:3");
console.log(result);// 13
