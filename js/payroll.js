// payroll.js
document.addEventListener('DOMContentLoaded', () => {
    const empName = document.getElementById('emp-name');
    const daysWorked = document.getElementById('days-worked');
    const dailyRate = document.getElementById('daily-rate');
    const deduction = document.getElementById('deduction');

    const addBtn = document.getElementById('add-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const tableBody = document.querySelector('#payroll-table tbody');

    let employees = [];

    function renderTable() {
        tableBody.innerHTML = '';
        employees.forEach((emp, index) => {
            const grossPay = emp.daysWorked * emp.dailyRate;
            const netPay = grossPay - emp.deduction;
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${emp.name}</td>
                    <td>${emp.daysWorked}</td>
                    <td>${emp.dailyRate.toFixed(2)}</td>
                    <td>${grossPay.toFixed(2)}</td>
                    <td>${emp.deduction.toFixed(2)}</td>
                    <td>${netPay.toFixed(2)}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    addBtn.addEventListener('click', () => {
        const nameVal = empName.value.trim();
        const daysVal = parseFloat(daysWorked.value);
        const rateVal = parseFloat(dailyRate.value);
        const deductionVal = parseFloat(deduction.value);

        if(!nameVal || isNaN(daysVal) || isNaN(rateVal) || isNaN(deductionVal)) {
            alert("Please enter valid values for all fields.");
            return;
        }

        employees.push({
            name: nameVal,
            daysWorked: daysVal,
            dailyRate: rateVal,
            deduction: deductionVal
        });

        empName.value = '';
        daysWorked.value = '';
        dailyRate.value = '';
        deduction.value = '';

        renderTable();
    });

    deleteBtn.addEventListener('click', () => {
        const lineNumber = parseInt(prompt("Enter the line number to delete:"));
        if(isNaN(lineNumber) || lineNumber < 1 || lineNumber > employees.length) {
            alert("Invalid line number.");
            return;
        }
        employees.splice(lineNumber - 1, 1);
        renderTable();
    });
});
