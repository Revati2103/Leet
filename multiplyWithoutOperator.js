// Multiply 2 nos without using * operator .

function  multiplierLoop(a, b) {
    let resultat = 0;
    for (let i = 0; i < a; i++) {
        resultat += b;
    }

    return resultat;
}
