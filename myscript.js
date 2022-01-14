let app = new Vue ({
    el : '#magia',
    data : {
        visualizzata : 0,
        cartoline : [
            {
                'immagine' : 'img/01.jpg',
                'luogo' : 'Svezia',
                'testo' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                'immagine' : 'img/02.jpg',
                'luogo' : 'Sviezzera',
                'testo' : 'Lorem ipsum',
            },
            {
                'immagine' : 'img/03.jpg',
                'luogo' : 'Gran Bretagna',
                'testo' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                'immagine' : 'img/04.jpg',
                'luogo' : 'Germania',
                'testo' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                'immagine' : 'img/05.jpg',
                'luogo' : 'Paradise',
                'testo' : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        
        ],
    },
    methods : {
        mostra : function (indice) {
            if(indice == this.visualizzata){
                return 'active'
            }
            return 'hidden'
        },
        selezionata : function (indice) {
            if(indice == this.visualizzata){
                return 'ms_no_oscura','ms_border'
            }
            return 'ms_oscura'
        },
        seleziona : function (indice) {
            this.visualizzata = indice;
        },
        successiva : function () {
            this.visualizzata++;
            if(this.visualizzata == this.cartoline.length){
                this.visualizzata = 0
            };
        },
        precedente : function () {
            this.visualizzata--;
            if(this.visualizzata < 0){
                this.visualizzata = this.cartoline.length - 1;
            };
        },
    },
    mounted : function (){
        setInterval(this.successiva, 3000);
    }
}
);