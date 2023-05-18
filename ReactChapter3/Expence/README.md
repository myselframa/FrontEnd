# React

Use of React in package.json and also why every component returns only one dom

ans-->

React internally converts the data as follows

return React.createElement(
"div",
{},
React.createElement("h2", {}, "Lets start the class"),
React.createElement(Expenses, { expenses: expenses })
);
