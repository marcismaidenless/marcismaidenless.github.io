// assignment3.js
document.addEventListener('DOMContentLoaded', () => {
    const inputN = document.getElementById('input-n');
    const factorialSpan = document.getElementById('factorial');
    const sumSpan = document.getElementById('sum');
    const averageSpan = document.getElementById('average');
    const computeBtn = document.getElementById('compute-btn');

    computeBtn.addEventListener('click', () => {
        const n = parseInt(inputN.value);

        if (isNaN(n) || n < 1) {
            alert("Please enter a valid positive number.");
            return;
        }

        let factorial = 1;
        let i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }

        let sum = 0;
        let j = 1;
        do {
            sum += j;
            j++;
        } while (j <= n);

        let total = 0;
        for (let k = 1; k <= n; k++) {
            total += k;
        }
        let average = total / n;

        factorialSpan.textContent = factorial;
        sumSpan.textContent = sum;
        averageSpan.textContent = average.toFixed(2);
    });
});
