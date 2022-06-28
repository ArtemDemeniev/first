const tabBtn = document.querySelectorAll('.tabs-nav__item');
const tabsItems = document.querySelectorAll('.tabs-card');

tabBtn.forEach(function(item){

            item.addEventListener('click', function(){

let currentBtn = item;
let tabId = currentBtn.getAttribute('data-tab');
let currentTab = document.querySelector(tabId);

if(!currentBtn.classList.contains('is-active')){
    tabBtn.forEach(function(item){
        item.classList.remove('is-active');
    });
    
    tabsItems.forEach(function(item){
        item.classList.remove('is-active');
    });
    
    currentBtn.classList.add('is-active');
    currentTab.classList.add('is-active');

}
});

});

document.querySelector('.tabs-nav__item').click();