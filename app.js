//const AFFICHE = document.getElementById('contaffichage');
const AFFICHE = document.getElementById('afficheCont');
//const RESULT = document.getElementById('contresultat');
const RESULT = document.getElementById('afficheRes');
const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => {
    button.addEventListener('click', () => {
        
        if (button.innerText === '=') {
            try {
                console.log(RESULT.innerHTML);
                RESULT.value = eval(AFFICHE.value);

            } catch (error) {
                RESULT.value = 'ERREUR';
            }
        } else if (button.innerText === 'C') {
            AFFICHE.value = "";

        } else if (button.innerHTML === 'Ret') {
            effacerDernier();
        } else {
            console.log(AFFICHE.value);
            AFFICHE.value += button.innerText; 
        }
    });
});

function effacerDernier() {
    var aff = AFFICHE.value;
    var newAff = aff.substring(0, aff.length - 1);
    document.getElementById('afficheCont').value = newAff;
}