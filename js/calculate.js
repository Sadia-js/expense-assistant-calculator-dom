// expense calculations here

document.getElementById('calculations-counter').addEventListener('click', function(event){
    event.preventDefault();
    const softwareCost = getInputFieldValueById('software');
    const coursesCost =  getInputFieldValueById('courses');
    const internetCost = getInputFieldValueById('internet');
    const currentIncome = getInputFieldValueById('current-income');

    // total expenses
    const totalExpenses = (softwareCost + coursesCost + internetCost).toFixed(2);
    removeHiddenClassListById('results-here');
    document.getElementById('total-expense').innerText = totalExpenses;
    
    //rest money
    const balance = (currentIncome - totalExpenses).toFixed(2);
    setInnerValueById('balance', balance);

        // expense history

        document.getElementById('show-all-expense').innerHTML =
        `
        <p>Income : $${currentIncome}</p>
        <p>Expense : $${totalExpenses}</p>
        <p>Balance : $${balance}</p>
        `
        document.getElementById('show-all-expense').classList.add(
            "mt-4", 'p-3', 'font-semibold', 'text-base', 'bg-base-100', 
            'rounded-lg', 'shadow-sm', 'border-l-2', 'border-blue-900'
        );
})

// savings calculator here
document.getElementById('calculate-savings').addEventListener('click', function(event){
    event.preventDefault();

    const balance = document.getElementById('balance').innerText;
    const keepSavings = getInputFieldValueById('keep-savings');

    // savings amount
    const totalSavings = (balance * (keepSavings / 100)).toFixed(2);
    setInnerValueById('savings-amount', totalSavings);

    // Remaining Balance
    const remainingBalance = (balance - totalSavings).toFixed(2);
    setInnerValueById('remaining-amount', remainingBalance);

    document.getElementById('show-all-expense').innerHTML +=
     `
    <p>Savings : $${savings}</p>
    <p>Balance Remains after Savings : $${total}</p>
    `
})

// assistant button clicking
function assistantBtn(){
    addHiddenClassListById('expense-history');
    removeHiddenClassListById('counter-form');
}

// history button clicking
function historyBtn(){
    addHiddenClassListById('counter-form');
    removeHiddenClassListById('expense-history');
}