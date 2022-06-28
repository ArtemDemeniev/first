let offset = 0;
const sliderLine = document.querySelector('.reviews-slider-line');


document.querySelector('.next').addEventListener('click', function(){
        offset = offset + 100;
    if (offset > 200){
    offset = 0;
    }

        sliderLine.style.left = -offset + '%'
})

document.querySelector('.prev').addEventListener('click', function(){
    offset = offset - 100;
if (offset < 0){
offset = 200;
}

    sliderLine.style.left = -offset + '%'
})