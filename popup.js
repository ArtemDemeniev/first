const openPopUp = document.getElementById('open');
const closePopUp = document.getElementById('close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('activated');

})


closePopUp.addEventListener('click', () => {
popUp.classList.remove('activated')

});


// ********************
const openPopUps = document.getElementById('opend');
const closePopUps = document.getElementById('closed');
const popUps = document.getElementById('pop-up');

openPopUps.addEventListener('click', function(e){
    e.preventDefault();
    popUps.classList.add('activ-act');

})


closePopUps.addEventListener('click', () => {
popUps.classList.remove('activ-act')

})