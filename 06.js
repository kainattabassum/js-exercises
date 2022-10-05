let person = "    Kainat Tabassum    ";

// /^\s+|\s+$/gm 
// -------------------------------------------------
// ^ asserts position at start of the line, \s whitespace, + one or unlimited times, $ end of a line, gm modifier
let removeChar = person.replace(/^\s+|\s+$/gm,'');

console.log(person)
console.log(removeChar)