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

function tipAmount(bill, service) {
    if (service == "good") {
        return bill * .20;
    } else if (service == "fair") {
        return bill * .15;
    } else if (service == "bad") {
        return bill * .10;
    } else {
        return undefined;
    }
}