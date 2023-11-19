const navbar = document.getElementById('navbar')
const hamburger = document.querySelector('.hamburger')
console.log(hamburger)
const lottiePlayer = document.querySelector('.lottie_img')

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active")

    setTimeout(() => {
        if (navbar.classList.contains('active')) {
            lottiePlayer.style.display = 'none'
        } else {
            setTimeout(() => {
                lottiePlayer.style.display = 'block'
            }, 200)
        }
    }, 400)
});

