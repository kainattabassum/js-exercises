(1 == '1') ? console.log(true) : console.log(false);
(1 != '1') ? console.log(true) : console.log(false);

console.log('........... case ............')
let myName = 'KAINAT'

myName.toLowerCase() == 'kainat' ? console.log(true) : console.log(false)

console.log('........... operators ............')
let username = 'sparrow'
let pwd = 'abcd123'

if(username == 'sparrow' && pwd == 'abcd123') {
    console.log('Welcome', username)
} else {
    console.log('Try, again')
}

console.log('........... array ............')
let arr = [1, 2, 3, 4, 5];
let findItem = arr.filter(elem => elem < 4)
let notfindItem = arr.filter(elem => elem > 5)

console.log(findItem)
console.log(notfindItem)