
//performing a task - pure funftion
function greek(name, inital, lastname) {
    /* statement */
    console.log("Hello" + ' ' + name + '.' + inital + '.' + lastname);
}

//calculating a task
function square(number) {
  return number * number
}

// greek('koushik','N','nagaraj')
// console.log(square(2));

//operator Arthimetic, assignment, comparssion, equality, ternary, logical;

var a = 5;
var b = 9;
// var arr = [1,2,3]

//lose comapare only value
// console.log(a == b);

//strict compare type+value
// console.log(a === b);

//super market customer who have more than 100 point
//golden customer above 100
// other silver customer below 100

var point = 90;
var type = point > 100 ? 'golden' : 'sliver';
// console.log(type);


//logical opertor
console.log(true || false);

var nonBoolean = (a > 4 && b < 8);
// console.log(nonBoolean);

var precendence = (2 + 3) * 4;
// console.log(precendence);

