// Swiper
var swiper = new Swiper(".popular-content",{
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
});

// SHOW VIDEO
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add("show-video");
    // AUTO PLAY WHEN CLICK ON BUTTON
    myvideo.play();
};
closebtn.onclick = () => {
    video.classList.remove("show-video");
    // PAUSE WHEN CLICK ON BUTTON
    myvideo.pause();
};

//CAIXA DE PESQUISA
const search =() =>{
    const searchbox = document.getElementById("search-input").ariaValueMax.toUpperCase();
    const nomefilmes = document.getElementById("todosfilmes");
    const caixafilmes = document.querySelectorAll(".movie-box");
    const nomecaixafilmes = nomefilmes.getElementsByTagName("h2");

    for(var i=0; i < nomecaixafilmes.length; i++){
        let match = caixafilmes[i].getElementsByTagName('2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                caixafilmes[i].getElementsByClassName.display = "";
            }else{
                caixafilmes[i].getElementsByClassName.display = "none";
            }
        }
    }
}