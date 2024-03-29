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
        "created": "2021-06-25"
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
        "created": "2021-09-03"
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
        "created": "2021-05-15"
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
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const cardElement = document.getElementById("container")

const likedPosts = [];

posts.forEach(function (contentPosts, index) {

    let date = contentPosts.created.split("-").reverse().join("-")

    cardElement.innerHTML += `    
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${contentPosts.author.image}" alt="${index} id="image__js">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${contentPosts.author.name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${contentPosts.content}</div>
            <div class="post__image">
                <img src="${contentPosts.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${contentPosts.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${contentPosts.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `


    const imgElement = document.querySelectorAll(".post-meta__icon")

    if (contentPosts.author.image == null) {

        const nameVar = contentPosts.author.name.split(" ");
        let authorInitial = "";

        for (let i = 0; i < nameVar.length; i++) {
            authorInitial += nameVar[i][0];

        }

        authorInitial = authorInitial.toUpperCase();
        imgElement[index].removeChild
        imgElement[index].innerHTML = `<div class="profile-pic-default"><span>${authorInitial}</span></div>`

    }

})

document.querySelectorAll('.js-like-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const postElement = this.closest('.post');
        const postId = parseInt(this.getAttribute('data-postid'));

        const likeCounter = postElement.querySelector('.js-likes-counter');

        if (likedPosts.includes(postId)) {

            const index = likedPosts.indexOf(postId);
            likedPosts.splice(index, 1);

            likeCounter.textContent = parseInt(likeCounter.textContent) - 1;

            this.querySelector('.like-button__label').style.color = '';
        } else {

            likedPosts.push(postId);

            likeCounter.textContent = parseInt(likeCounter.textContent) + 1;

            this.querySelector('.like-button__label').style.color = 'red';
        }

        console.log(likedPosts);
    });
});

