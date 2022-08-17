"use strict";
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        console.log(a + b);
    if (typeof a === 'string' && typeof b === 'string')
        console.log(a + b);
}
addOrConcat(10, 20);
addOrConcat('30', '200');
