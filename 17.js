var names = ['sarah', 'ayesha', 'roshan', 'nabeela', 'neelam']
console.log('Unfortunately, I only have space for two guests');

let arr = 0;
for (var i = 0; i < names.length; ++i) {

    if (arr <= names.length - 2) {
        console.log('Sorry ' + names[i] + ', you are not invited for dinner.');
        names.pop();
    }
    arr++;
}

for (var i = 0; i < names.length; ++i) {
    console.log('Hello ' + names[i] + ', I would like to invite you to annual dinner on upcoming Thrusday afternoon.' + '\n');
}


for (var i = 0; i < names.length; i++) {
    names.pop();
}