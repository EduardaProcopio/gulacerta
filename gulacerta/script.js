const toggleButton = document.getElementsByClassName('toggle-button')[0]
const mainnavLinks = document.getElementsByClassName('main-nav-links')[0]

toggleButton.addEventListener('click', () => {
    mainnavLinks.classList.toggle('active')
})