// add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get the withdraw amount from input field
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    //converting string input to number
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //clear input
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid amount');
        return;
    }

    // get previous withdraw total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // get previous balace total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Eto taka nai bhai!');
        return;
    }

    //update total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // new balance 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // 

})