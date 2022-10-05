const usernames = ['admin', 'john', 'becky', 'smith', 'tyson']

usernames.map(name => {
    name == 'admin' ? 
    console.log(`Hello admin, would you like to see a status report?`) : 
    console.log(`Hello ${name}, thank you for logging in again.`)
})