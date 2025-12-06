
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

const incDisplay = document.getElementById("inc");
const expDisplay = document.getElementById("exp");
const balDisplay = document.getElementById("bal");


let incomeData = [];
let expenseData = [];


let ctx = document.getElementById("chart").getContext("2d");
let expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Income", "Expense"],
        datasets: [{
            data: [0, 0],
            backgroundColor: ["#4caf50", "#f44336"]
        }]
    }
});