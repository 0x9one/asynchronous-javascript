let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid : ['water', 'ice'],
    Holder : ['cone', 'cup', 'stick'],
    Toppings : ['chocolate', 'peanuts']
};

let isOpen = true; // If it's true we make icecream but of  it's flase we are close

let order = (time, work) => {
    return new Promise( (resolve, reject) => {
        if (isOpen) {
            setTimeout(() => { 
                resolve( work() );
            }, time);
        } else {
            reject(console.log('our shop is closed'));
        }
        
    })
};

// Don't use simecolon here to make promise chainig work
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`)) 
.then( () => {
    return order(0000, () => console.log('production has started'))
})

.then( () => {
    return order(2000, () => console.log('the fruit was chopped'))
})

.then( () => {
    return order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`))
})

.then( () => {
    return order(1000, () => console.log('the machine was started'))
})

.then( () => {
    return order(1000, () => console.log(`${stocks.Holder[0]} was selected`))
})

.then( () => {
    return order(3000, () =>  console.log(`${stocks.Toppings[0]} was choose`))
})

.then( () => {
    return order(2000, () => console.log('serve icecream'))
})

// Error handler Only work when our promise rejected
.catch( () => {
    console.log('Customer left')
})

// Finally handeler work in resolve or reject
.finally( () => {
    console.log('day ended, shop is closed');
})