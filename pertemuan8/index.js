let account = {

  name: 'Glain',
  expenses: [],

  addExpense(description, amount) {
      account.expenses.push({
          description: description,
          amount: amount
      });
  },

  getAccountSummary(){
    let totalExpenses = 0
    account.expenses.forEach(function(expenses){
    totalExpenses = totalExpenses + expenses.amount
    // return account.expenses.reduce((result, expense) => result + expense.amount, 0);
    });
    return totalExpenses;
}
}

account.addExpense('Odading', 10000);
account.addExpense('Ongkos', 8000);
console.log("Total Pengeluaran " +  account.name + " adalah " + account.getAccountSummary())
