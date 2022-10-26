document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit');
    const newDepositAmount = depositField.value;
    // console.log(depositAmount);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    currentDepositTotal = parseFloat(newDepositAmount) + parseFloat(previousDepositTotal);
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(newDepositAmount) + parseFloat(previousBalanceTotal);
    balanceTotal.innerText = currentBalanceTotal;

    depositField.value = '';
})