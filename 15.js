let names = ['sarah', 'ayesha', 'roshan']
console.log(`${names[1]} isn't coming`)

names[1] = 'amina'

for(let i = 0; i < names.length; i++) {
    console.log(names[i] + ", let us invite you to our dinner party where you can come, eat and drink.")
}