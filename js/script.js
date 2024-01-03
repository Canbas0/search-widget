const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', ()=>{
    searchInput.classList.toggle('active');
    searchInput.focus();
})