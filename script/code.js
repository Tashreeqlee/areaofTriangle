const calculateButton = document.getElementById('calculate');
        const baseInput = document.getElementById('base');
        const heightInput = document.getElementById('height');
        const resultDiv = document.getElementById('result');

        calculateButton.addEventListener('click', () => {
            const base = parseFloat(baseInput.value);
            const height = parseFloat(heightInput.value);
            const area = (base * height) / 2;
            resultDiv.textContent = `The area of the triangle is ${area.toFixed(2)}`;
        });