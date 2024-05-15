function puissance(base, exposant) {
    // Cas de base : si l'exposant est 0, le résultat est 1
    if (exposant === 0) {
        return 1;
    }
    // Cas récursif : multiplier la base par elle-même, en diminuant l'exposant de 1
    return base * puissance(base, exposant - 1);
}
console.log(puissance(2, 3)); // Résultat : 8 (2^3)
console.log(puissance(5, 2)); // Résultat : 25 (5^2)
console.log(puissance(10, 0)); // Résultat : 1 (10^0)
