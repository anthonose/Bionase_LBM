function appendValue(val) {
    document.getElementById('calc-output').value += val;
}

function clearDisplay() {
    document.getElementById('calc-output').value = '';
}

function calculateResult() {
    let output = document.getElementById('calc-output');
    try {
        // eval() évalue l'expression mathématique dans la chaîne de caractères
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Erreur'; // Affiche "Erreur" si le calcul est invalide
    }
}

