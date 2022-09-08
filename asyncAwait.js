let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid : ['water', 'ice'],
    Holder : ['cone', 'cup', 'stick'],
    Toppings : ['chocolate', 'peanuts']
};

let isOpen = true; 

function time(ms) {
    return new Promise((resolve, rejecte) => {
        if(isOpen) {
            setTimeout(
                resolve,ms
            )
        } else {
            reject(console.log('Shop is closed'));
        }
    })
}
async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)
        
        await time(0000)
        console.log('Start the production')

        await time(2000)
        console.log('the fruit was chopped')

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

        await time(1000)
        console.log('the machine was started')

        await time(1000)
        console.log(`${stocks.Holder[0]} was selected`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was choose`)

        await time(2000)
        console.log('serve icecream')
    }   
    catch(error) {
        console.log('customer left', error)
    }
    finally{
        console.log('day ended, shop is closed')
    }
}

kitchen();