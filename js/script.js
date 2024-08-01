//Toggle class active
const nabvarNav = document.querySelector('.navbar-nav');
//ketika pentol di klik
document.querySelector('#Pentol-Menu').onclick = () => {
  nabvarNav.classList.toggle('active');
};
//ketika di klik diluar sidebar
const pntl = document.querySelector('#Pentol-Menu');
document.addEventListener('click', function(e){
    if(!pntl.contains(e.target) && !nabvarNav.contains(e.target))
      nabvarNav.classList.remove('active')
})
