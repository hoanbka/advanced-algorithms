
function calculateTotalAmount(vip) {
    let amount = 0 // probably should also be let, but you can mix var and let
    if (vip) {
        let amount = 1 // first amount is still 0
    }
    { // more crazy blocks!
        let amount = 100 // first amount is still 0
        {
            let amount = 1000 // first amount is still 0
        }
    }
    return amount
}

console.log(calculateTotalAmount(true))