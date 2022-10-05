let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num.map(no => {
    if(no == 1) {
        console.log('1st')
    } else if ( no == 2) {
        console.log('2nd')
    } else if (no == 3) {
        console.log('3rd')
    } else {
        console.log(`${no}th`)
    }
})