const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked" : true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked" : false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked" : true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked" : false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2021-12-11"
    }
];


// Descrizione:
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
//  Prendiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni oggetto avr?? le informazioni necessarie per stampare la relativa card:
//     id del post, numero progressivo da 1 a n
//     nome autore,
//     foto autore,
//     data in formato americano (yyyy-mm-gg),
//     testo del post,
//     immagine (non tutti i post devono avere una immagine),
//     numero di likes.
 
// Milestone 1 -
//  Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed, rimuovendo i contenuti statici.

// Milestone 2:
//  Se clicchiamo sul tasto "Mi Piace" cambiamo il colore sia al bottone che al testo del bottone del relativo post.
// Bonus 1-
//  Quando clicchiamo su un "Mi piace", oltre al cambio previsto dalla milestone 2, incrementiamo il counter dei likes relativo al suddetto post.
// Cerchiamo di trovare un modo efficiente per salvare il like per ogni post, magari sfruttando meglio i dati che ho gi?? a disposizione?

// Bonus 2
//  Formattare le date in formato italiano (gg/mm/aaaa)
//  Al click su un pulsante "Mi Piace" di un post, se abbiamo gi?? cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// Bonus 3
//  Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  LF).
// Consigli del giorno :party_wizard:
//  Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() ?? nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni pi?? piccole.


// prendo l'elemento della pagina
const container = document.getElementById('container')
// per ogni elemento dell'array creo un post con i dati dell'oggetto
posts.forEach(element => {
    const {id,content,media,author,likes,is_liked,created} = element
    let newPost = document.createElement('div')
    let newLike = likes
    newPost.innerHTML = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="Phil Mangione">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${changeDate(created)}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button${id}" href="javascript:;" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${id}" class="js-likes-counter">${newLike}</b> persone
                    </div>
                </div>
            </div>
        </div>`
    container.append(newPost)

    // prendo il bottone dei like e controllo se islike==true
    let liked = document.querySelector(`.js-like-button${id}`)
    if(is_liked){
        liked.classList.add('like-button--liked')
    }
    // prendo il counter dei like
    let likeCounter = document.getElementById(`${id}`)
    // aggiungo l'evento al click
    liked.addEventListener('click',function(){
        if(!element.is_liked){
            liked.classList.add('like-button--liked')
            element.is_liked = true
            newLike++
            likeCounter.innerHTML = newLike
        }else{
            liked.classList.remove('like-button--liked')
            element.is_liked = false
            newLike--    
            likeCounter.innerHTML = newLike
        }
    })
    
});

function changeDate (data){
    return data.split('-').reverse().join('/')
}


