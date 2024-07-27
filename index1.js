let cart = [
    {
        itemName: "Jeans",
        amount: 500
    },
    {
        itemName: "Tops",
        amount: 300
    },
    {
        itemName: "Kajal",
        amount: 150
    },
    {
        itemName: "Nail paint",
        amount: 500
    }
];

let initialWalletAmount = 3000;

function createOrder(cart) {
    const order = new Promise(function(resolve, reject) {
        if (!validateCart(cart)) {
            const err = "Cart value is not valid, cart is not empty";
            reject(err);
        }
        const orderId = "54321";
        if (orderId) {
            resolve(orderId);
        }
    });
    return order;
}

function validateCart(cart) {
    return cart.length > 0;
}

function proceedToPayment(orderId) {
    console.log("order ID inside proceed to payment", orderId);
    const totalAmount = cart.reduce((total, item) => total + item.amount, 0);
    console.log("Total cart amount:", totalAmount);
    return new Promise(function(resolve, reject) {
        if (totalAmount > initialWalletAmount) {
            reject("Insufficient wallet amount");
        } else {
            initialWalletAmount -= totalAmount;
            resolve("Payment Success");
        }
    });
}

function showOrderSummery(paymentInfo) {
    return new Promise(function(resolve, reject) {
        if (paymentInfo === "Payment Success") {
            resolve("Order Summery Created");
        } else {
            reject("Payment failed, cannot create order summary");
        }
    });
}

function updateWalletAmount(orderSummery) {
    return new Promise(function(resolve, reject) {
        if (orderSummery === "Order Summery Created") {
            resolve(`Wallet amount has been updated. Remaining amount: ${initialWalletAmount}`);
        } else {
            reject("Order summary failed, cannot update wallet amount");
        }
    });
}

createOrder(cart)
    .then(function(orderId) {
        console.log("orderId after promise resolve", orderId);
        return proceedToPayment(orderId);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(paymentInfo) {
        console.log("Payment Info:", paymentInfo);
        return showOrderSummery(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderSummery) {
        console.log("Order Summary:", orderSummery);
        return updateWalletAmount(orderSummery);
    })
    .then(function(updateWallet) {
        console.log("After resolving promise:", updateWallet);
    })
    .catch(function(err) {
        console.log("Error:", err);
    });
