
    const user = { id: 1, name: 'Razib Khan', job: 'actor'};

    const stringified = JSON.stringify(user);

    // console.log(stringified);

    const shop = {
        name: 'alia store',
        address: ' Dhanmondi, Dhaka',
        products: ['laptop', 'mobile', 'watch', 'desktop'],
        isExpensive: false
    }

    const stringifiedShop = JSON.stringify(shop);
    console.log(stringifiedShop);

    converted = JSON.parse(stringifiedShop);
    console.log(converted);
