var arr = [3,6,4,5,6,7,8];
// console.log(arr.length)
for(var i = 0; i < arr.length ; i++) {
    console.log(arr[i]);
}
console.log("forEach....")
arr.forEach((i, a) => {
    // console.log(i + '-->' + a)
});
console.log('push..');
arr.push(9);
console.log(arr);

console.log('pop...')
arr.pop();
console.log(arr);

console.log('unshift...')
arr.unshift(2);
console.log(arr);

console.log('shift');
arr.shift();
console.log(arr);

var arrObj = [
    {
        id: 1,
        name: 'koushik',
        age: 24,
        location: 'BAN'
    },
    {
        id: 2,
        name: 'arun',
        age: 24,
        location: 'BAN'
    },
    {
        id: 3,
        name: 'vinoth',
        age: 31
    }
];

arrObj.forEach(function(ele) {
    ele['dob'] = '01/01/1999';
})

var filterObj = arrObj.find(function(ele) {
    return ele.id == 1;
})

console.log(arrObj);
console.log(filterObj);
console.log("arr",arr);
console.log('index',arr.indexOf({
    id: 3,
    name: 'vinoth',
    age: 31
}));

/* Map Example */
var newMap = arr.map(function(ele) {
    return ele*ele
})

console.log("new Map", newMap)

var _reduce = arr.reduce(function(prev, cur) {
    return prev+cur;
})

console.log("reduce",_reduce);

//map, filter, reduce, find .....
