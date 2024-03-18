"use strict";
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(ammontare) {
        this.credito += ammontare;
    }
    chiamata(minuti) {
        if (minuti <= this.credito) {
            this.credito -= minuti;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiamata404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const utente1 = new User("Riccardo", "Giallo");
utente1.ricarica(40);
utente1.chiamata(20);
console.log(`Credito residuo: ${utente1.chiamata404()}, Minuti di chiamata effettuati: ${utente1.getNumeroChiamata()}`);
utente1.azzeraChiamate();
console.log(`Minuti di chiamata azzerati: ${utente1.getNumeroChiamata()}`);
