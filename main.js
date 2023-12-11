import rs, { question } from "readline-sync";
import { showPercentage } from "./function.js";
import { Expense, RecurringExpense } from "./class.js";

let budget = {};
const categories = ["savings", "investment", "livingCost", "GuiltFreeExpenses"];
const expenses = [];
const frequencies = ["monthly", "quarterly", "semiannual", "annual"];

const amount = rs.question("What is your budget?");
budget.amount = Number(amount);
budget.categories = [];
let total = 0;
for (let i = 0; i < categories.length; i++) {
  const percentage = Number(
    rs.question(
      `What percentage of your budget do you want to spend on ${categories[i]} :\n`
    )
  );
  if (total + percentage > 100) {
    i--;
    console.log("You have exceeded your budget");
  } else {
    total += percentage;
    budget.categories.push({ name: categories[i], percentage: percentage });
  }
}

console.log(budget);

let action = "";

do {
  action = rs.question(`What do you want to do? 
    Enter 'x' to stop the program:\n
    Enter 'e' to add expenses:\n
    Enter 'r' for report:\n 
     `);

  switch (action) {
    case "r":
      console.log("This is your report");
      showPercentage(budget, expenses);
      break;
    case "e":
      console.log("Enter the following information about your expense \n");
      let name = rs.question(`What  is the expense about ?\n`);
      let date = rs.question(`Please enter the date: Date/Month/Year\n`);
      let amount = rs.question(`Enter the amount you spend:\n`);
      let type = Number(
        rs.question(`Choose the type of your expense:
      1.${categories[0]}\n
      2.${categories[1]}\n
      3.${categories[2]}\n
      4 ${categories[3]}\n`)
      );
      let recurring = rs.question(
        `Enter if is a recurring expense or not? yes/no\n`
      );
      if (recurring.toLowerCase() === "yes") {
        let frequency = Number(
          rs.question(`Choose the frequency:
        1.${frequencies[0]}\n
        2.${frequencies[1]}\n
        3.${frequencies[2]}\n
        4 ${frequencies[3]}\n`)
        );
        let stopDate = rs.question(`When will it stop ?`);

        expenses.push(
          new RecurringExpense(
            name,
            date,
            amount,
            categories[type - 1],
            stopDate,
            frequencies[frequency - 1]
          )
        );
      } else {
        expenses.push(new Expense(name, date, amount, categories[type - 1]));
      }

      showPercentage(budget, expenses);

      break;
    case "x":
      console.log("See you next time");
      break;
    default:
      console.log("Invalid option.Please insert the correct character");
  }
} while (action != "x");

/*
Budget object:

{
    amount: int,
    categories: [
        {
            name: string,
            percentage: int
        }
    ]
}
*/
/* 
Expense object:

{
    name: string,
    date: Date,
    amount: int,
    recurring: bool,
    type: string
}
*/

// asking for a budget
// ask for amount

// go through categories and ask for percentage

// construct the Budget object

// my main loop

//do {
//action = rs.question("What do you want to do? Enter 'e' for expenses")
// switch (action){
// add expenses

// }

//} while (action != "x");

// function that can inform the user the remaining percentage or used percentage in expense,
//should go through all the expense array and all the categories of budget object
