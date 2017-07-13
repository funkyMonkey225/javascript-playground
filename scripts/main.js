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
    var tip = 0;
    if (service == "good") {
        tip = bill * .20;
    } else if (service == "fair") {
        tip = bill * .15;
    } else if (service == "bad") {
        tip = bill * .10;
    } else {
        tip = undefined;
    }
    return tip;
}


function tipAmount2(bill, serviceLevel) {
    var tip = 0;
    // if (!serviceLevel) {
    //     serviceLevel = good;
    // }
    // serviceLevel = serviceLevel || good;

    if (!serviceLevel) {
        throw new Error("Value Error: please pass in string as serviceLevel");
    }

    var serviceLevels = {
        "good": 0.2,
        "fair": 0.15,
        "bad":  0.1,
        "poor": 0.05
    }
    if (serviceLevel in serviceLevels) {
        tip = bill * serviceLevels[serviceLevel];
    }
    return tip;
}

function totalAmount(bill, service) {
    var tip = tipAmount(bill, service);
    return bill + tip;
}

function splitAmount(bill, service, people) {
    var total = totalAmount(bill, service);
    return total / people;
}