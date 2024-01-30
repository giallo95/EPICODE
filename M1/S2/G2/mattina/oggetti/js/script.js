const obj = {
    string: '',
    number: 0,
    boolea: true,
    oggetto: {},
    array:[]
    
    }

    
    {

        let pizza = {
            gusto: 'margherita',
            prezzo: 5,
            disponibile: true,
            "lista ingredienti": 'mozzarella, pomodoro'
        }

        //scrittura di una proprietà
        pizza.gusto = 'diavola';

        //lettura di una proprietà
        console.log(pizza.gusto);

        //lettura di un valore da una prop il cui nome non rispetta la sintassi di js
        console.log(pizza ['lista ingredienti']);

    }

    {


        function Pizza (){
            this.gusto = 'margherita';
            this.prezzo = 5;
            this.disponibile = true ;
        }

        let margherita = new Pizza();
        let diavola = new Pizza();
        diavola.gusto = 'diavola'

        document.write(margherita) // non posso mostrare a schermo l' oggetto intero devo selezionare una proprietà
        document.write(margherita.gusto) // cosi posso effettivamente mostrare il gusto

        console.log(margherita, diavola);
    }



