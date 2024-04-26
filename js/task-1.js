
function makeTransaction (quantity, pricePerDroid) {
    pricePerDroid = pricePerDroid * quantity;
    return `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
}

console.log(makeTransaction(5, 3000));

console.log(makeTransaction(3, 1000));

console.log(makeTransaction(10, 500));