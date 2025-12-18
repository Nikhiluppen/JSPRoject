const payments = [
  {
    id: "TXN1001",
    user: "John Doe",
    amount: 120,
    method: "Credit Card",
    status: "Success",
    date: "2025-12-10"
  },
  {
    id: "TXN1002",
    user: "Jane Smith",
    amount: 75,
    method: "UPI",
    status: "Failed",
    date: "2025-12-11"
  },
  {
    id: "TXN1002",
    user: "Jane Smith",
    amount: 75,
    method: "UPI",
    status: "Failed",
    date: "2025-12-11"
  },
  {
    id: "TXN1003",
    user: "Alex Brown",
    amount: 250,
    method: "Debit Card",
    status: "Success",
    date: "2025-12-12"
  },
  {
    id: "TXN1004",
    user: "Emily White",
    amount: 60,
    method: "Net Banking",
    status: "Success",
    date: "2025-12-13"
  }
];

// DOM Elements
const tableBody = document.getElementById("paymentTable");
const totalRevenueEl = document.getElementById("totalRevenue");
const totalTransactionsEl = document.getElementById("totalTransactions");
const successCountEl = document.getElementById("successCount");
const failedCountEl = document.getElementById("failedCount");

let totalRevenue = 0;
let successCount = 0;
let failedCount = 0;

// Render Table
payments.forEach(payment => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${payment.id}</td>
    <td>${payment.user}</td>
    <td>${payment.amount}</td>
    <td>${payment.method}</td>
    <td class="${payment.status === 'Success' ? 'status-success' : 'status-failed'}">
      ${payment.status}
    </td>
    <td>${payment.date}</td>
  `;
-
  tableBody.appendChild(row);

  if (payment.status === "Success") {
    totalRevenue += payment.amount;
    successCount++;
  } else {
    failedCount++;
  }
 
});

// Update Dashboard Values
totalRevenueEl.textContent = `$${totalRevenue}`;
totalTransactionsEl.textContent = payments.length;
successCountEl.textContent = successCount;
failedCountEl.textContent = failedCount;
