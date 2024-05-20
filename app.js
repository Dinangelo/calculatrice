const AFFICHE = document.getElementById('contaffichage');
const RESULT = document.getElementById('contresultat');
const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => {
    button.addEventListener('click', () => {
        
        if (button.innerText === '=') {
            try {
                console.log(RESULT.innerHTML);
                RESULT.innerHTML = eval(AFFICHE.innerHTML);
                

            } catch (error) {
                AFFICHE.value = 'ERREUR';
            }
        } else if (button.innerText === 'C') {
            AFFICHE.innerHTML = '';

        } else {
            AFFICHE.innerHTML += button.innerText; 
        }
    });
});