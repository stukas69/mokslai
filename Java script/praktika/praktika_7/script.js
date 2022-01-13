const inputEl = document.getElementById('number');
const paragraphEl = document.querySelector('div');

inputEl.addEventListener('click', (event) => {
         event.preventDefault()
        // Kaip pasitikrinti duomunu tipa? panaudokim typeof
        // galime prie string prieko prirasyti + ir gausim duomenu tipa number arba panaudoti parseInt() funkcija
        // console.log('Veikia', +event.target.value);
        // console.log('Veikia', parseInt(event.target.value));
        // isNaN tikrina ar reiksme yra Nan ar ne
    	const elValue = +event.target.value;
        function calculateStars(elValue) {
            let stars = '';
            for (let i = 0; i < elValue; i++) {
                // stars = stars + '*';
                stars += '*';
                console.log(stars);
                paragraphEl.textContent = `Your answer is: ${stars}`;
            }
            
        }       
        calculateStars(elValue);    
    });


    
    
