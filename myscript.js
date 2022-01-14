const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// ciclo for immagini piccole 
let itemsPiccole = '';
let fotoActive = 0;

for (let i = 0; i < items.length; i++) {
    itemsPiccole += `
    <div class="col-12 p-0 ms_h20 ms_oscura" id="items-${i}">
        <img src="${items[i]}">
    </div>`;
};

const imgPiccole = document.getElementById('img_piccole');
imgPiccole.innerHTML = itemsPiccole;

let fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
fotoPiccolaActive.classList.remove('ms_oscura');
fotoPiccolaActive.classList.add('ms_no_oscura');
fotoPiccolaActive.classList.add('ms_border');


// ciclo for immagini grande 
let itemGrande = '';
let elementActive = 0;

for (let i = 0; i < items.length; i++) {
    itemGrande += `
    <img class="hidden" id="item-grande-${i}" src="${items[i]}">
    <div class="ms_posAbs">
        <div class="hidden text-end ms_title" id="title-img-${i}">${title[i]}</div>
        <div class="hidden text-end ms_text" id="text-img-${i}">${text[i]}</div>
    </div>`;
};

const imgGrande = document.getElementById('img_grande');
imgGrande.innerHTML = itemGrande;

let itemActive = document.getElementById('item-grande-'+ elementActive);
itemActive.classList.remove('hidden');
itemActive.classList.add('active');

let titleActive = document.getElementById('title-img-'+ elementActive);
titleActive.classList.remove('hidden');
titleActive.classList.add('active');

let textActive = document.getElementById('text-img-'+ elementActive);
textActive.classList.remove('hidden');
textActive.classList.add('active');

// tasti up e down 
const up = document.querySelector('.up');
const down = document.querySelector('.down');

// scendere immagine 
down.addEventListener('click', function() {
    fotoActive++;
    elementActive++;
    // foto grande 
    if (elementActive == items.length) {
        elementActive = 0;
        itemActive.classList.add('hidden');
        itemActive.classList.remove('active');
        itemActive = document.getElementById('item-grande-'+ elementActive);
        itemActive.classList.remove('hidden');
        itemActive.classList.add('active');
        titleActive.classList.add('hidden');
        titleActive.classList.remove('active');
        titleActive = document.getElementById('title-img-'+ elementActive);
        titleActive.classList.remove('hidden');
        titleActive.classList.add('active');
        textActive.classList.add('hidden');
        textActive.classList.remove('active');
        textActive = document.getElementById('text-img-'+ elementActive);
        textActive.classList.remove('hidden');
        textActive.classList.add('active');
    }else{
        itemActive.classList.add('hidden');
        itemActive.classList.remove('active');
        itemActive = document.getElementById('item-grande-'+ elementActive);
        itemActive.classList.remove('hidden');
        itemActive.classList.add('active');
        titleActive.classList.add('hidden');
        titleActive.classList.remove('active');
        titleActive = document.getElementById('title-img-'+ elementActive);
        titleActive.classList.remove('hidden');
        titleActive.classList.add('active');
        textActive.classList.add('hidden');
        textActive.classList.remove('active');
        textActive = document.getElementById('text-img-'+ elementActive);
        textActive.classList.remove('hidden');
        textActive.classList.add('active');
    }

    // foto piccola 
    if (fotoActive == items.length) {
        fotoActive = 0;
        fotoPiccolaActive.classList.add('ms_oscura');
        fotoPiccolaActive.classList.remove('ms_no_oscura');
        fotoPiccolaActive.classList.remove('ms_border');
        fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
        fotoPiccolaActive.classList.remove('ms_oscura');
        fotoPiccolaActive.classList.add('ms_no_oscura');
        fotoPiccolaActive.classList.add('ms_border');
    }else{
        fotoPiccolaActive.classList.add('ms_oscura');
        fotoPiccolaActive.classList.remove('ms_no_oscura');
        fotoPiccolaActive.classList.remove('ms_border');
        fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
        fotoPiccolaActive.classList.remove('ms_oscura');
        fotoPiccolaActive.classList.add('ms_no_oscura');
        fotoPiccolaActive.classList.add('ms_border'); 
    }
});


// salire immagine 
up.addEventListener('click', function() {
    fotoActive--;
    elementActive--;
    // foto grande 
    if (elementActive == 0-1) {
        elementActive = items.length-1;
        itemActive.classList.add('hidden');
        itemActive.classList.remove('active');
        itemActive = document.getElementById('item-grande-'+ elementActive);
        itemActive.classList.remove('hidden');
        itemActive.classList.add('active');
        titleActive.classList.add('hidden');
        titleActive.classList.remove('active');
        titleActive = document.getElementById('title-img-'+ elementActive);
        titleActive.classList.remove('hidden');
        titleActive.classList.add('active');
        textActive.classList.add('hidden');
        textActive.classList.remove('active');
        textActive = document.getElementById('text-img-'+ elementActive);
        textActive.classList.remove('hidden');
        textActive.classList.add('active');
    }else{
        itemActive.classList.add('hidden');
        itemActive.classList.remove('active');
        itemActive = document.getElementById('item-grande-'+ elementActive);
        itemActive.classList.remove('hidden');
        itemActive.classList.add('active');
        titleActive.classList.add('hidden');
        titleActive.classList.remove('active');
        titleActive = document.getElementById('title-img-'+ elementActive);
        titleActive.classList.remove('hidden');
        titleActive.classList.add('active');
        textActive.classList.add('hidden');
        textActive.classList.remove('active');
        textActive = document.getElementById('text-img-'+ elementActive);
        textActive.classList.remove('hidden');
        textActive.classList.add('active');
    }

    // foto piccola 
    if (fotoActive == 0 - 1) {
        fotoActive = items.length-1;
        fotoPiccolaActive.classList.add('ms_oscura');
        fotoPiccolaActive.classList.remove('ms_no_oscura');
        fotoPiccolaActive.classList.remove('ms_border');
        fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
        fotoPiccolaActive.classList.remove('ms_oscura');
        fotoPiccolaActive.classList.add('ms_no_oscura');
        fotoPiccolaActive.classList.add('ms_border');
    }else{
        fotoPiccolaActive.classList.add('ms_oscura');
        fotoPiccolaActive.classList.remove('ms_no_oscura');
        fotoPiccolaActive.classList.remove('ms_border');
        fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
        fotoPiccolaActive.classList.remove('ms_oscura');
        fotoPiccolaActive.classList.add('ms_no_oscura');
        fotoPiccolaActive.classList.add('ms_border');
    }
});