var numbers = [45, 68, 78, 56, 89, 98];

// get element value by index
console.log(numbers[0]);

// can take any index as a variable
var element = numbers[1];
console.log(element);

// change or set index value
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

// find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

console.log(6 != 6);
console.log(6 >= 6);

var x=9;
var y= 12;
 if(x>y){
    console.log("x is greater than y")
 }
 else if(x<y){
    console.log("y is bigger");
 }