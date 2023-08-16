document.getElementById('withdraw-btn').addEventListener('click', function(){
    let balanceElement = document.getElementById('account-balance');
    let withdrawAmountElement = document.getElementById('withdraw-amount');
    let withdrawBalance = document.getElementById('withdraw-balance');

    let previousBalance = getElementInnerTextMakeNumber('account-balance');
    let currentWithdraw = getValueTextMakeNumber('withdraw-amount');

    withdrawBalance.innerText = currentWithdraw.toString();

    if(previousBalance > currentWithdraw){
        let currentBalance = subTwoNumbers(previousBalance, currentWithdraw);

        balanceElement.innerText = currentBalance.toString();
        withdrawAmountElement = '';
    } else{
        alert('Taka joma koris nai tulbi kemne!!!');
    }
})