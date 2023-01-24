//ETA UTENTE

const età = parseInt(prompt('Età'));
const km = parseInt(prompt('Quanti KM percorri?'));

// CALCOLO PREZZO

const prezzoEuroKm = 0.21;
let price = km * prezzoEuroKm;

// MINORENNE

if(età < 18) {
    const scontoMinorennePerc = 20;
    const scontoMinorenneEuro = price * 0.2;
    const pricef = price - scontoMinorenneEuro;

    console.log(`Prezzo under 18 ${pricef}`)
}

if (età >= 65) {
    const scontoAnzianoPerc = 40;
    const scontoAnzianoEuro = price * 0.4;
    const pricef = price - scontoAnzianoEuro;

    console.log(`Prezzo over 65 ${pricef}`)
}

if (età >= 18 && età < 65 ) {
    console.log(`Prezzo ${price}`)
}