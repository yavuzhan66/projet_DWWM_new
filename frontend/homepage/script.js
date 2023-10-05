
////////////////////////POPUP//////////////////:
function togglePopup() {
    var popup = document.getElementById("popup-1");
    popup.classList.toggle("active");
}

function closePopup() {
    var popup = document.getElementById("popup-1");
    popup.classList.remove("active");
}



/////////////////////BT-UP/////
const btUp = document.querySelector('#bt-up');
btUp.style.display = 'none';
btUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        btUp.style.display = 'flex';
    } else {
        btUp.style.display = 'none';
    }
})