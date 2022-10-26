document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmount = withdrawField.value;

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    currentWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = currentBalanceTotal;

    withdrawField.value = '';
})