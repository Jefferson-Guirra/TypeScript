"use strict";
function createPerson(firstName, lastName) {
    if (lastName)
        return { firstName, lastName };
    else
        return { firstName };
}
console.log(createPerson('jefferson'));
