$(document).ready(function(){
    
    $('.feedback__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  centerMode: false,
                  arrows: false,
                  dots: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  slidesToShow: 1,
                },
            }
        ]
    });
    
  $("a[href^='#']").click(function(){   
     _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });
  // Progress Scroll
const ProgressScroll = (() => {
  let s;

  return {
    settings() {
      return {
        top: $('.progress-top'),
        windowHeight: $(window).height(),
        windowWidth: $(window).width(),
        scrollHeight: $(document).height() - $(window).height(),
        progressTotal: $(window).width(),
        scrollPosition: $(document).scrollTop()
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      $(window).on('scroll', this.onScroll);
      $(window).on('resize', this.onResize);

      this.progress();
    },

    onScroll() {
      s.scrollPosition = $(document).scrollTop();

      ProgressScroll.requestTick();
    },

    onResize() {
      s.windowHeight = $(window).height();
      s.windowWidth = $(window).width();
      s.scrollHeight = $(document).height() - s.windowHeight;
      s.progressTotal = s.windowWidth;

      ProgressScroll.requestTick();
      },

      requestTick() {
        requestAnimationFrame(this.progress);
      },

      progress() {
       const percentage = s.scrollPosition / s.scrollHeight;
       const width = s.windowWidth / s.progressTotal;

        s.top.css('width', `${(percentage / width) * 100}%`);
      }
    };
  })();

// init Progress Scroll
  $(() => {
  ProgressScroll.init();
  });
});

// Hamburger
const nav = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

