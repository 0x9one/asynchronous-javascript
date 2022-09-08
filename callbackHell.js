let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid : ['water', 'ice'],
    Holder : ['cone', 'cup', 'stick'],
    Toppings : ['chocolate', 'peanuts']
};

let order = (fruitName, callProduction) => {
    setTimeout( () => {
        console.log(`${stocks.Fruits[fruitName]}`);
        callProduction();
    }, 2000);
    
};

let production = () => {
    // This is called callback hell
    setTimeout( () => {
        console.log('production has started');

        setTimeout( () => {
            console.log('the fruit has been chopped');

            setTimeout( () => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

                setTimeout( () => {
                    console.log('the machine was started');

                    setTimeout( () => {
                        console.log(`${stocks.Holder[0]} was selected`);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} was choose`);

                            setTimeout( () => {
                                console.log('serve icecream');

                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(0, production);