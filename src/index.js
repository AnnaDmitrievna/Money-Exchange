// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let resObj = {};
    let currencies = [50,25,10,5,1];
    let names = ['H','Q','D','N','P'];

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    currencies.reduce((current, item, index) => {
        if (current >= item && current > 0) {
            let summ = Math.floor(current/item);
            resObj[names[index]] = summ;
            return current - summ*item;
        }
        else {
            return current
        }
    }, currency)


    return resObj;
}
