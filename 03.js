let person = 'kainat tabassum';

console.log(person.toLowerCase())
console.log(person.toUpperCase())

function titlecase(str) {
    let sentence = str.toLowerCase().split(" ")
    for(let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }

    sentence.join(" ")
    return sentence
}
console.log(titlecase(person))