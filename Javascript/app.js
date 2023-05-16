/**
 * This is the main file for the application
 */


const printName = (name) => {
    console.log(name);
}

let name = 'John Doe';
let namesofPeople = ['John', 'Jane', 'Jack', 'Jill', 'James'];

let filteredName = namesofPeople.filter(name => name.length > 4);

console.log(filteredName);




printName('John Doe');