document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');

    convertBtn.addEventListener('click', () => {
        const type = document.getElementById('conversion-type').value;
        const value = parseFloat(document.getElementById('input-value').value);
        let result;

        if (isNaN(value)) {
            result = "Please enter a valid number.";
        } else {
            switch(type) {
                case 'cToF':
                    result = (value * 9/5 + 32).toFixed(2) + " °F";
                    break;
                case 'fToC':
                    result = ((value - 32) * 5/9).toFixed(2) + " °C";
                    break;
                case 'mToFt':
                    result = (value * 3.28084).toFixed(2) + " ft";
                    break;
                case 'ftToM':
                    result = (value / 3.28084).toFixed(2) + " m";
                    break;
                default:
                    result = "Unknown conversion type.";
            }
        }

        document.getElementById('result').textContent = result;
    });
});
