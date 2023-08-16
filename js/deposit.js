document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositElement = document.getElementById('deposit-balance');
    let previousDeposit = getElementInnerTextMakeNumber('deposit-balance');
    let currentDeposit = getValueTextMakeNumber('deposit-amount');
    
    totalDeposit = sumTwoNumbers(previousDeposit, currentDeposit);

    depositElement.innerText = totalDeposit.toString();

    let depositAmountInput = document.getElementById('deposit-amount');
    depositAmountInput.value = ''; // Reset the input field to an empty string

    let balanceElement = document.getElementById('account-balance');
    let previousBalance = getElementInnerTextMakeNumber('account-balance');
    let totalBalance = sumTwoNumbers(previousBalance, currentDeposit);

    balanceElement.innerText = totalBalance.toString();
})