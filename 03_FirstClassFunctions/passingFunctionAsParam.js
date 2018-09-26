var text = "Domo arigatou!";
report("Before defining functions");

function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
}

function getText() {
    report("In getText function");
    return text;
}

report("Before making all the calls");
assert(useless(getText) === text, "The useless function works! " + text);

report("After the calls have been made");

