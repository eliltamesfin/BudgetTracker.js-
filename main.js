import rs from "readline-sync"

const reocuringExpense ={}
const variableExpense ={};

const generalBudget= rs.question("What is your budget?")
variableExpense.generalBudget=Number(generalBudget)
console.clear()
//-------------------------------------------------------------------------


const rentExpense =Number(rs.question("How much do you pay for rent?"))
let frequencyExpenses=rs.question("Do you pay the same amount every month?")
if (frequencyExpenses === "yes" ){
    reocuringExpense.rentExpense=Number(rentExpense)
}else {
     variableExpense.rentExpense=Number(rentExpense)
}
console.clear()
//----------------------------------------------------------------------------
const groceries=Number(rs.question("How much do you spend for your groceries?"))
frequencyExpenses= rs.question("Do you pay the same amount every month?")
if (frequencyExpenses === "yes"){
reocuringExpense.groceries=Number(groceries)
}else {
    variableExpense.groceries=Number(groceries)
}

console.clear()
//---------------------------------------------------------------------------
const insurances= Number(rs.question("How much do you spend for insurances?"))
frequencyExpenses=rs.question("Do you pay the same amount every month?")
if (frequencyExpenses === "yes"){
    reocuringExpense.insurances=Number(insurances)
}else {
    variableExpense.insurances=Number(insurances)
}
console.clear()
//-------------------------------------------------------------------------



const goal1 = rs.question('Now let us talk about your saving goals!What do you want to save for?')
const goal2 = rs.question("what else you want to add in your saving goal?")
const goal3= rs.question("Continue please!")
const goal4=rs.question("Just asking for a last goal")






console.log(`Constant amount you pay every month `,reocuringExpense)
console.log( `Not constant payment` ,variableExpense)