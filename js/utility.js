function inputValueTextMakeNumber(valueId) {
    const valueElement = document.getElementById(valueId);
    const valueString = document.getElementById(valueId).value;
    const valueNumber = parseFloat(valueString);

    if (!isNaN(valueNumber)) {
        return valueNumber;
    } else {
        return alert('Takar amount na bolle add kormu kemne!!! Ammount bol...');
    }

    valueElement = '';
}

function getElementInnerTextMakeNumber(elementId){
    const textElement = document.getElementById(elementId).innerText;
    const textNumber = parseFloat(textElement);

    if(!isNaN(textNumber)){
        return textNumber;
    } else{
        return alert('Takar amount na bolle tor dimu kemne!!! Ammount bol...');
    }

    textElement = '';
}

