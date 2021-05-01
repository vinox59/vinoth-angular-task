var obj = {} //object


//object oriented programming (oop)... 
obj = {
    name: 'angular',
    age: '4',
    location : {
        lat: 23.7654,
        lon: 22.8765
    },
    display: function() {
        console.log('display');
    }
}
//notation
//camel case - oneTwoThree
//pascal notation - OneTwoThree


//factory method
function aboutMe(name, age, location) {
    return {
        name,
        age,
        location,
        display() {
            console.log('display');
        }
    }
}

//constructor method
function AboutConst(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.display = function() {
        console.log('display constructor')
    }
}

var angular = aboutMe('angular',4,{lat: 23.4, lon:24.5});
var constAngular = new AboutConst('angular',4,{lat: 23.4, lon:24.5});
console.log(constAngular);

const a = {};
a['a'] = 1;
a['b'] = 4;

var b = {...a};

b['c'] = 5;


// a = {a: 1, b: 2};
console.log('a',a);
console.log('b',b);