// First Approach on a single line
// function makeSandwich(...items) {
//     console.log(`${items} added in your sandwich`)
// }

// makeSandwich('chill', 'chicken', 'katchup')


// Second approach one by one 
function makeSandwich(...items) {
    for(let item of items) {
        console.log(`${item} added in your sandwich`)
    }
}

makeSandwich('chill', 'chicken', 'katchup')
console.log('-------------------------------------')
makeSandwich('tomato', 'chicken', 'katchup', 'mayo')
console.log('-------------------------------------')
makeSandwich('chill', 'beef', 'katchup')