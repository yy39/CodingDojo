console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello) // logs: undefined
// hello = 'world';

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// test() // nothing outputted
// (i was wrong)

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// print is defined
// console.log(brendan) outputs 'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food); outputs: 'chicken'
// eat calls the functions
// var food;
// food = 'half-chicken'
// console.log(food) outputs: 'half-chicken'
// food ='gone';

mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean
// mean();
// console.log(food) outputs: undefined
// var food
// food = 'chicken';
// console.log(food) outputs: chicken
// food = 'fish';
// console.log(food); outputs: fish
// console.log(food); outputs undefined
// i want wrong again, syntax error

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre
// console.log(genre); outputs: undefined
// rewind();
// genre = 'rock';
// console.log(genre); outputs: 'rock'
// gengre = 'r&b';
// console.log(genre); outputs: 'r&b'
// console.log(genre); outputs: 'disco'

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo
// dojo = 'san jose';
// console.log(dojo); outputs: 'san jose'
// learn();
// dojo = 'seattle';
// console.log(dojo); outputs: 'seattle'
// dojo = 'burbank';
// console.log(dojo); outputs: 'burbank'
// console.log(dojo); outputs: 'san jose'

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// errors due to trying reassign a const variable