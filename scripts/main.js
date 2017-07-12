console.log("Hello World!");

function printThing() {
    // console.log('a thing');
    return 'a thing';
}

function hello(name) {
    if (!name) {           // if not whom...
        name = "World";
    }
    return "Hello, " + name + "!";
}