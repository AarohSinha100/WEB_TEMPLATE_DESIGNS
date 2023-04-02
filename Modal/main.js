//when the modal button is clicked, add the open-modal class to model-ovrlay.
//model-overlay has visiblity:visible and z-index-10 so it will make the modal visible

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){
    modal.classList.add('open-modal')
})

closeBtn.addEventListener('click',function(){
    modal.classList.remove('open-modal')
})