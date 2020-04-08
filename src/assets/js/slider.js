// I use my slider  https://codepen.io/aleksey-kaa

function Slide({
    slider,
    currentSlide = 0,
    dots = false,
    dotsContainer = false }) {
    
    this.sl = document.querySelector(slider);
    this.dots = dots;
    this.dotsContainer = dotsContainer;
    this.currentSlide = currentSlide;
    this.init();
  }
  
  Slide.prototype = {
    init: function() {
      this.wrapper = this.sl.querySelector(".slider-wrap");
      this.wChildren = Array.from(this.wrapper.children);
      this.prev = this.sl.querySelector(".prev");
      this.next = this.sl.querySelector(".next");

      if (this.dots) {
        this.dotsCreate();
        this.dotsWrap = this.sl.querySelector(".dots-wrap");
        this.dChildren = Array.from(this.dotsWrap.children);
      }

      this.nav();
    },
    nav: function() {
      this.showSlide();
    },
    showSlide: function() {
      this.startSlide();
      this.prev.onclick = () => this.startSlide(-1);
      this.next.onclick = () => this.startSlide(1);
      if (this.dots) {
        this.dotSlide();
      }
    },
    dotSlide: function() {
      this.dotsWrap.addEventListener("click", e => {
        if (e.target.closest(".dot")) {
          for (let i = 0; i < this.dChildren.length; i++) {
            if (this.dChildren[i] === e.target) {
              this.currentSlide = i;
              this.startSlide();
            }
          }
        }
      });
    },
    dotsCreate: function() {
      let dotsWrap = document.createElement("div");
      dotsWrap.className = "dots-wrap";
      let dotsContainer = this.sl.querySelector(".dots-wrap");
  
      for (let i = 0; i < this.wChildren.length; i++) {
        let dot = document.createElement("span");
        dot.className = "dot";
  
        this.dotsContainer
          ? this.sl.querySelector(".dots-wrap").append(dot)
          : dotsWrap.append(dot);
      }
      this.dotsContainer ? null : this.wrapper.append(dotsWrap);
    },
    startSlide: function(num = 0) {
      const childLength = this.wChildren.length - 1;
      this.currentSlide += num;
  
      this.wChildren.forEach(item => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
        item.classList.add("hide");
      });
      if (this.dots) {
        this.dChildren.forEach(dot => {
          if (dot.classList.contains("active")) {
            dot.classList.remove("active");
          }
        });
      }
  
      if (this.currentSlide < 0) {
        this.currentSlide = childLength;
      }
      if (this.currentSlide > childLength) {
        this.currentSlide = 0;
      }
      if (this.dots) {
        this.dChildren[this.currentSlide].classList.add("active");
      }
      this.wChildren[this.currentSlide].classList.add("active");
    }
  };

export default Slide
