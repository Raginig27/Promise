let cart =  [
    {
        itemName: "Jeans",
        amount: 500
    },
    {
        itemName: "Tops",
        amount: 500
    },
    {
        itemName: "Kajal",
        amount: 500
    },
    {
        itemName: "Nail paint",
        amount: 500
    }
];

function createOrder(cart) {
    const order = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = "Cart value is not valid, cart is not empty";
            reject(err);
        }
        const orderId = "54321";
        if(orderId) {
            resolve(orderId);
        }
    });
    console.log("orderId", order)
    return order;
}

function validateCart(cart) {
    if(cart.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function proceedToPayment(orderId){
    console.log("order ID inside proceed to payment", orderId);
    return new Promise(function(resolve, reject) {
        resolve("payment Success");
    })
}

function showOrderSummery(paymentInfo) {
    return new Promise(function(resolve, reject) {
        if(paymentInfo === "payment Success"){
            resolve("Order Summery Created");
        }
    })
}

function updateWalletAmount(orderSummery) {
    return new Promise(function(resolve, reject) {
        if(orderSummery === "Order Summery Created"){
            resolve("Wallet amount has been updated");
        }
    })
}

createOrder(cart)
    .then(function(orderId) {
        console.log("orderId after promise resolve", orderId);
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId) {
        const paymentInfo = proceedToPayment(orderId);
        console.log(paymentInfo);
        return paymentInfo;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(paymentInfo) {
        console.log("after resolving promise value is", paymentInfo);
        const orderSummery = showOrderSummery(paymentInfo);
        console.log("orderSummery", orderSummery);
        return orderSummery;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderSummery){
        console.log("after resolving promise orderSummery val", orderSummery);
        const updateWallet = updateWalletAmount(orderSummery);
        console.log("updateWallet", updateWallet);
        return updateWallet;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(updateWallet){
        console.log("After resolving promise", updateWallet);
    });