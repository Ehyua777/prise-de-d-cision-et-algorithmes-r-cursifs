function fibonacci(n) {
    // Cas de base : si n est 0 ou 1, on renvoie n
    if (n <= 1) {
        return n;
    }
    // Cas récursif : renvoyer la somme des deux nombres de Fibonacci précédents
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // Résultat : 0
console.log(fibonacci(1)); // Résultat : 1
console.log(fibonacci(2)); // Résultat : 1
console.log(fibonacci(3)); // Résultat : 2
console.log(fibonacci(4)); // Résultat : 3
console.log(fibonacci(5)); // Résultat : 5
console.log(fibonacci(6)); // Résultat : 8
