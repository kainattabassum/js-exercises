let magicians = ['Harry potter', 'Dumbledore', 'Harmione']

function show_magicians(person) {
    for(let per of person) {
        console.log(per)
    }
}

function make_great(person) {
    for(let per of person) {
        console.log(per + " the Great!")
    }
}

console.log('Original Magicians Name')
show_magicians(magicians)

console.log('Great Magicians Name')
make_great(magicians)