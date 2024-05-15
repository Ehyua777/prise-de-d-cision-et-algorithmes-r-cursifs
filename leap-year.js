function leap_year(year) {
    if (year != 0) {
        if (year % 4 === 0 && year % 100 != 0) {
            console.log(`${year} est une année bixtile`)
        } else if (year % 400 === 0) {
            console.log(`${year} est une année bixtile`)
        } else {
            console.log(`${year} n'est pas une année bixtile`)
        }
    }
    else {
        console.log("Il n'existe pas d'année 0")
    }
}

let annee = 2025
leap_year(annee)