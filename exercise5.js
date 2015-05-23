// Exercise 5.
// --------------------------------------------------------
function find3LargestSorted(numbers){
  var nums = [];
  for(var key in arguments){
    var value = arguments[key];
    nums.push(value);
  }
  var sorted = nums.sort(function(a, b){
    return a - b;
  });

var start = sorted.length-3;
return sorted.splice(start, sorted.length).reverse();
}

var result = find3LargestSorted(2, 4, 1, 9, 8, 10, 3, 16, 22, 8);
console.log(result); // [22, 16, 10]
