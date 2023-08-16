document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositElement = document.getElementById('deposit-balance');

    let previousDeposit = getElementInnerTextMakeNumber('deposit-balance');
    let currentDeposit = getValueTextMakeNumber('deposit-amount');

    totalDeposit = sumTwoNumbers(previousDeposit, currentDeposit);

    depositElement.innerText = totalDeposit.toString();
})