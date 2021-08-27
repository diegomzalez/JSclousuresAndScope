const helloWorld = () => {
        const hello = 'Hello World';
        console.log(hello)
};

helloWorld();
console.log(hello);

var scope = "I am global";

const functionScope = () => {
        var scope = "I am just a local";
        var func = () => {
                return scope;
        }
        console.log(func());
};
functionScope();
console.log(scope);

const helloWorld = () => { 
        globalVar = "I'm global"; 
}; 
helloWorld();
console.log(globalVar);
debugger

const buildCount = (i) => { 
        let count = i; return count; 
}
debugger
const buildCount = (i) => { 
        let count = i; 
        const displayCount = () => { 
                console.log(count++); 
        }; 
}
debugger