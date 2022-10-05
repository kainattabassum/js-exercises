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

show_magicians(magicians)

make_great(magicians)