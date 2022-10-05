const usernames = ['admin', 'john', 'becky', 'smith', '', 'tyson']

usernames.map(elem => {
    elem == 'admin' ? 
        console.log(`Hello admin, would you like to see a status report?`) : 
        elem == '' ? 
        console.log('We need to find some users!') : 
        console.log(`Hello ${elem}, thank you for logging in again.`)
})