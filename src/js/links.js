const headerLogo = document.querySelector('.header-logo')
const mainSection = document.querySelector('main')
const btnInfo = document.querySelector('.btn-info')
const btnQuiz = document.querySelector('.btn-quiz')
const sectionSlides = document.querySelector('.slider')
const menuInformation = document.querySelector('#bt-menuInformation')
const menuSymptoms = document.querySelector('#bt-menuSymptoms')
const menuTreatment = document.querySelector('#bt-menuTreatment')
const menuPrevention = document.querySelector('#bt-menuPrevention')
const quizSection = document.querySelector('.quiz')

btnInfo.addEventListener('click', () => goToPage(3))
menuInformation.addEventListener('click', () => goToPage(3))
menuSymptoms.addEventListener('click', () => goToPage(2))
menuTreatment.addEventListener('click', () => goToPage(1))
menuPrevention.addEventListener('click', () => goToPage(0))

btnQuiz.addEventListener('click', () => {
    resetEvent()
    quizSection.classList.remove('hidden')
    mainSection.classList.add('hidden')
    sectionSlides.classList.add('hidden')
})

headerLogo.addEventListener('click', () => {
    mainSection.classList.remove('hidden')
    sectionSlides.classList.add('hidden')
    quizSection.classList.add('hidden')
})

function goToPage(page) {
    sectionSlides.classList.remove('hidden')
    mainSection.classList.add('hidden')
    quizSection.classList.add('hidden')
    activeSlideIndex = page
    changeSlide()
}