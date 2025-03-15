let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.amount;
  return acc;
}, {});

// console.log("Expense Report:", expenseReport);

let tasks = [
  { description: "write report", completed: false, priority: 2 },
  { description: "send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((item) => !item.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log("tasks: ", pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie b", ratings: [5, 5, 4] },
  { title: "Movie c", ratings: [3, 4, 2] },
];



