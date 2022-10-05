let names = ['sarah', 'ayesha', 'roshan']

names.unshift('amina')
names.push('laiba')
names.splice(2, 0, 'maham')

for(let i = 0; i < names.length; i++) {
    console.log(names[i] + ", let us invite you to our dinner party where you can come, eat and drink.")
}