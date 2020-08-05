function extractCurrencyValue(price) {
    return +price.slice(1);
}

alert( extractCurrencyValue('$500') === 500);
