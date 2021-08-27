var hello = 'Hello';
var hello = 'Hello +'
let world = 'Hello World';
let world = 'Hello';
const helloWorld = 'Hello World!';
const anotherFunction = () => {
        console.log(hello);
        console.log(world);
        console.log(helloWorld);
}
anotherFunction();

const helloWorld = () => {
        globalVar = 'Im global';
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
        var locarVar = globalVar = 'Im global';
}
anotherFunction();
console.log(globalVar);