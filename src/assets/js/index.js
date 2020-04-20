import "@babel/polyfill";

import '../../../node_modules/svgxuse/svgxuse';
import Slide from './slider'

// ParentNode.append polyfill
(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('append')) {
        return;
      }
      Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

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

