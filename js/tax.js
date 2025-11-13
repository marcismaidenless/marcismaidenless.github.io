// tax.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('compute-btn');
  const incomeInput = document.getElementById('taxable-income');
  const resultDisplay = document.getElementById('income-tax');

  btn.addEventListener('click', () => {
    const income = parseFloat(incomeInput.value);

    if (isNaN(income) || income < 0) {
      resultDisplay.textContent = "0.00";
      alert("Please enter a valid taxable income.");
      return;
    }

    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 400000) {
      tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
      tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
      tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
      tax = 490000 + (income - 2000000) * 0.32;
    } else {
      tax = 2410000 + (income - 8000000) * 0.35;
    }

    resultDisplay.textContent = tax.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  });
});
