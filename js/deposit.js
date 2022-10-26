document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit');
    const depositAmount = depositField.value;
    // console.log(depositAmount);
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})