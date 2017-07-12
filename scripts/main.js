console.log("Hello World!");

function hello(name) {
    if (!name) {           // if not whom...
        name = "World";
    }
    return "Hello, " + name + "!";
}

function madlib(name, subject) {
    return name + "'s favorite subject in school is " + subject + ".";
}