
import '../../../node_modules/svgxuse/svgxuse';
import Slide from './slider'

(function() {
    const headerSlider = new Slide({
        slider: '.slider',
        dots: true,
        dotsContainer: true
    })
    const gameElementSlider = new Slide({
        slider: '.game-el-slider',
        currentSlide: 3,
        dots: true
    })
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault()
            const blockId = this.getAttribute('href')
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }) 
})()

