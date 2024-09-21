// get inputField values by Id
function getInputFieldValueById(id){
    const inputField = document.getElementById(id).value;
    const inputValue = parseFloat(inputField);

    return isNaN(inputValue) ? 0 : inputValue;
}

// set innerText by Id
function setInnerValueById(id, value){
    document.getElementById(id).innerText = value;
}

// show container on screen
function removeHiddenClassListById(id){
    document.getElementById(id).classList.remove('hidden');
}


// hide container on screen
function addHiddenClassListById(id){
    document.getElementById(id).classList.add('hidden');
}