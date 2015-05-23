// Exercise 3.
// --------------------------------------------------------

function sum(array){
return array.reduce(function(curr, prev){
  return curr+prev;
});
}

var result = sum([3,7,8]);
console.log(result); // 18
