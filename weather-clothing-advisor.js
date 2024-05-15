
function weather_clothing_advisor(temperature, pluit) {
    // Conseiller les vêtements à porter
    if (pluit.toLowerCase() === "oui") {
        if (temperature < 10) {
            console.log("Nous vous conseillons de porter un manteau, des gants et un parapluie.");
        } else if (temperature >= 10 && temperature < 20) {
            console.log("Nous vous conseillons de porter un imperméable et des bottes.");
        } else {
            console.log("Nous vous conseillons de porter un léger imperméable.");
        }
    } else {
        if (temperature < 10) {
            console.log("Nous vous conseillons de porter un manteau chaud.");
        } else if (temperature >= 10 && temperature < 20) {
            console.log("Nous vous conseillons de porter un pull et une veste.");
        } else {
            console.log("Vous pouvez porter des vêtements légers.");
        }
    }
}
// Demander la température à l'utilisateur
//let temperature = prompt("Quelle est la température actuelle ?");
// Demander à l'utilisateur s'il pleut
//let pluit = prompt("Est-ce qu'il pleut ? (oui/non)");

weather_clothing_advisor(30, 'OUI')