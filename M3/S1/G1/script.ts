interface Smartphone {
    credito: number;
    numeroChiamate: number;
}

class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }

    ricarica(ammontare: number): void {
        this.credito += ammontare;
    }

    chiamata(minuti: number): void {
        if (minuti <= this.credito) {
            this.credito -= minuti;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiamata404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


const utente1 = new User("Riccardo", "Giallo");


utente1.ricarica(40);


utente1.chiamata(20);


console.log(`Credito residuo: ${utente1.chiamata404()}, Minuti di chiamata effettuati: ${utente1.getNumeroChiamata()}`);


utente1.azzeraChiamate();


console.log(`Minuti di chiamata azzerati: ${utente1.getNumeroChiamata()}`);