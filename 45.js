function car_menufacture(menufacturer, model, ...moreOption) {
    let carDetail = {
        menufacturer,
        model,
    }

    Object.entries(moreOption).forEach(([key, val]) => {
        
    })
    return carDetail
}

console.log(car_menufacture('Tesla', '45nB', color = 'black'))
console.log(car_menufacture('Tesla', '45nB', color = 'black', year = 2019))