document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmount = withdrawField.value;

    

    // if (isNaN(newWithdrawAmount)){
    //     alert('Please provide a valid number');
    //     return;
    // }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Eto taka nai bhai!');
        return;
    }

    const currentWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = currentBalanceTotal;

    
})