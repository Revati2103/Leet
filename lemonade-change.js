// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.


const BILL_5 = 5;
const BILL_10 = 10;
const BILL_15 = 15;

function giveChange(change, coins) {
    while (change) {
        if (!coins[BILL_5]) {
            return false;
        }
        coins[BILL_5]--;
        change -= BILL_5;
    }
    return true;
}

function lemonadeChange(bills) {
    const coins = { [BILL_5]: 0, [BILL_10]: 0 };

    for (let bill of bills) {
        if (bill === BILL_5) {
            coins[BILL_5]++;
        } else if (bill === BILL_10) {
            if (coins[BILL_5] === 0) {
                return false;
            }
            coins[BILL_10]++;
            coins[BILL_5]--;
        } else {
            let change = BILL_15;
            if (coins[BILL_10]) {
                coins[BILL_10]--;
                change = BILL_5;
            }
            if (!giveChange(change, coins)) {
                return false;
            }
        }
    }

    return true;
}