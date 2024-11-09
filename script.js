$(document).ready(function () {
                $(window).scroll(function () {
                  if (this.scrollY > 20) {
                      $('.navbar').addClass("sticky");
                  } else {
                      $('.navbar').removeClass("sticky");
                  }
                  if (this.scrollY > 500) {
                      $('.scroll-up-btn').addClass("show");
                  } else {
                      $('.scroll-up-btn').removeClass("show");
                  }
              });
          
    
              $('.scroll-up-btn').click(function () {
                  $('html').animate({ scrollTop: 0 })
              });
          
              $('.menu-btn').click(function () {
                  $('.navbar .menu').toggleClass("active");
                  $('.menu-btn span').toggleClass("active");
              });
          
              const typed1 = new Typed(".typing", {
                  strings: ["",],
                  typeSpeed: 100,
                  backSpeed: 60,
                  loop: true
              });
        
              const typed2 = new Typed(".typing-2", {
                  strings: ["",],
                  typeSpeed: 100,
                  backSpeed: 60,
                  loop: true
              });
          
        
              $('.carousel').owlCarousel({
                  margin: 20,
                  loop: true,
                  autoplayTime: 2000,
                  autoplayHoverPause: true,
                  responsive: {
                      0: {
                          items: 1,
                          nav: false
                      },
                      600: {
                          items: 2,
                          nav: false
                      },
                      1000: {
                          items: 3,
                          nav: false
                      }
                  }
              });
          });