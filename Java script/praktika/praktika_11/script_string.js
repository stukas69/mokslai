document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const quant = Number(document.getElementById('quant').value);

    if (Number.isInteger('quant')) {
        const h1 = document.createElement('h1');
        h1.textContent = name.repeat(quant);
        document.body.append(h1);
    } else {
        alert('Iveskite amziu skaiciumi');
    }
});