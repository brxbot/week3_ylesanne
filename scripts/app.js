let moviePoster = document.querySelector('.movie-poster');

let modal = document.querySelector('#myModal');

let closeBtn = document.querySelector('.closeBtn')

let modaImage = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener('click',()=>{
    console.log('image clicked');
    modal.style.display = 'block';
    modaImage.src = moviePoster.src;

})

closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none';
})

window.addEventListener('click',(Event) => {
    if(Event.target === modal){
        modal.style.display = 'none';
    }
})
