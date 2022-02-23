//Function For Getting Id from Html by DOM
function inputValue(id) {
    let input = document.getElementById(id)
    return input
}
//Function For activated Error Message 
function errorOn(id, message) {
    inputValue(id).style.display = 'block';
    inputValue(id).innerText = message
}
//Error Function For Unvalid Input field 
function inputError(variable, id, message) {
    if (!isNaN(variable) && variable >= 0 && variable != '') {
        errorOff(id)
    } else {
        errorOn(id, message)
    }
}
//Error Function For Null Input field 
function inputInsertError(variable, id, message) {
    if (variable == '') {
        errorOn(id, message)
    }
}
//Function For deactivated Error Message 
function errorOff(id) {
    inputValue(id).style.display = '';
    inputValue(id).innerText = ''
}
//Total Expenses and Balance Calculation
inputValue('calculate-btn').addEventListener('click', function () {
    let income = inputValue('income').value
    let food = inputValue('food').value
    let rent = inputValue('rent').value
    let clothes = inputValue('clothes').value
    //Error message here
    inputError(income, 'income-error', 'Please insert a valid income number')
    inputInsertError(income, 'income-error', 'Please insert income number')
    inputError(food, 'food-error', 'Please insert a valid food cost')
    inputInsertError(food, 'food-error', 'Please insert food cost')
    inputError(rent, 'rent-error', 'Please insert a valid rent cost')
    inputInsertError(rent, 'rent-error', 'Please insert rent cost')
    inputError(clothes, 'clothes-error', 'Please insert a valid clothes cost')
    inputInsertError(clothes, 'clothes-error', 'Please insert clothes cost')
    if (income != '' && food != '' && rent != '' && clothes != '' && !isNaN(income) && !isNaN(food) && !isNaN(rent) && !isNaN(clothes)) {
        let totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
        let balance = 0;
        if (totalExpenses >= 0 && totalExpenses < income) {
            inputValue('total-expenses').innerText = totalExpenses
            balance = income - totalExpenses;
            inputValue('balance').innerText = balance
            errorOff('expenses-error')
        } else {
            errorOn('expenses-error', 'You can\'t use more money then you have')
            inputValue('total-expenses').innerText = ''
            inputValue('balance').innerText = ''
        }
    }
})
//savings event handler code here
inputValue('save-btn').addEventListener('click', function () {
    let savePersent = inputValue('save-input').value
    let income = inputValue('income').value
    let balance = inputValue('balance').innerText
    let saveingPersentAmount = (savePersent / 100)
    let savingAmmount = income * saveingPersentAmount
    inputError(savePersent, 'save-input-error', 'Please insert a valid Persentence Number')
    inputInsertError(savePersent, 'save-input-error', 'Please insert Persentence Number')
    if (savingAmmount <= balance && balance != '') {
        inputValue('saving').innerText = savingAmmount
        let remainingBalance = balance - savingAmmount
        inputValue('remaining-balance').innerText = remainingBalance
        errorOff('savings-error')
    } else if (isNaN(savePersent) || savePersent == '') {
        errorOff('savings-error')
    } else {
        errorOn('savings-error', 'You can\'t Save more money then you have!')
        inputValue('saving').innerText = ''
        inputValue('remaining-balance').innerText = ''
    }
})
