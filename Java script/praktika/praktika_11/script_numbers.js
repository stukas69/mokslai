document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const price = Number(document.getElementById('price').value);
    const qunat = Number(document.getElementById('quant').value);

    const total = price * qunat;
    const priceDisplay = document.createElement('h1');
    priceDisplay.textContent = total.toFixed(2);
    document.body.append(priceDisplay);
});