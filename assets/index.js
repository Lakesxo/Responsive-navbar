let hamburger = document.getElementById('hamburger');
let mobileMenu = document.getElementById('mobile')

transition =()=> {
    hamburger.classList.toggle('trans')
    mobileMenu.classList.toggle('display')
}

hamburger.addEventListener('click', transition)