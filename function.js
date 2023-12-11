export function showPercentage(budget, expense) {
  for (let i = 0; i < budget.categories.length; i++) {
    const amountTotal = (budget.amount * budget.categories[i].percentage) / 100;
    let totalExpenses = 0;
    for (let j = 0; j < expense.length; j++) {
      if (expense[j].type === budget.categories[i].name)
        totalExpenses += expense[j].amount;
    }
    let percentage = (totalExpenses / amountTotal) * 100;
    if (percentage >= 100) {
      console.log(`You have used 100% or more of your ${budget.categories[i].name}`);
    } else if (percentage >= 75) {
      console.log(`You have used 75% or more of your ${budget.categories[i].name}`);
    } else if (percentage >=50) {
      console.log(`You have used 50% or more of your ${budget.categories[i].name}`);
    } else if (percentage >= 25) {
      console.log(`You have used 25% or more of your ${budget.categories[i].name}`);
    }
  }

}
