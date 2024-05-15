function ticket_prices(age) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Quel est votre âge ? ', (age) => {
        // Déterminer le prix du billet en fonction de l'âge
        let prixBillet;
        switch (true) {
            case age <= 12:
                prixBillet = 10;
                break;
            case age >= 13 && age <= 17:
                prixBillet = 15;
                break;
            default:
                prixBillet = 20;
        }

        console.log(`Le prix du billet de cinéma est de ${prixBillet} $.`);
        rl.close();
    });

}
// Demander à l'utilisateur son âge
ticket_prices()