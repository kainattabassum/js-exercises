let myCity = 'lahore'
let myAge = 26
let score = 85

let name = 'kainat'

console.log(myCity == 'lahore' ? true : false)
console.log(myAge >= 20 ? true : false)
console.log(score > 60 ? true : false)
console.log(name.length > 3 ? true : false)

console.log(name.length < 3 ? true : false)
console.log(score < 60 ? true : false)
console.log(myAge <= 20 ? true : false)
console.log(myCity == 'multan' ? true : false)

if(name.length > 5 && myAge >= 18 && score >= 50) {
    console.log('You can enroll', true)
} else {
    console.log('Sorry!!', false)
}

if(name.length > 5 && myAge >= 30 && score >= 50) {
    console.log('You can enroll', true)
} else {
    console.log('Sorry!!', false)
}