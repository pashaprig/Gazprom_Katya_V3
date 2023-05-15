// MENU

class App {
  init() {
    this.initMobileMenu();
    this.initRange();
    this.showHideLicense();
    this.scroll();
  }

  initMobileMenu() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');
    const navButtonText = document.querySelector('.main-nav__open-btn-text');
    const $sanctions = document.querySelector('.sanctions');
    const $why = document.querySelector('.why');

    const initJS = () => {
      navMain.classList.remove('main-nav--nojs');
    }

    const closeOpen = () => {
      navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
          $sanctions.style.display = 'none';
          $why.classList.add('why--invert-color');
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
          navButtonText.textContent = 'Закрыть меню';

        } else {
          $sanctions.style.display = 'block';
          $why.classList.remove('why--invert-color');
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
          navButtonText.textContent = 'Открыть меню';
        }
      });
    }

    const linksClick = () => {
      const links = document.querySelectorAll('.main-nav__item');

      const navLinckHandleClick = () => {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        $why.classList.remove('why--invert-color');
      }

      links.forEach(link => {
        link.addEventListener('click', navLinckHandleClick)
      })
    }

    initJS();
    closeOpen();
    linksClick();
  }

  initRange() {
    $(function () {
      $(".js-range-slider").ionRangeSlider({
        skin: "round",
        hide_min_max: false,
        hide_from_to: true,
        min: 18000,
        max: 1000000,
        from: 18000,
        max_postfix: "+",
        postfix: " руб.",
        grid: false,
        onStart: function (data) {
          $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' руб.');
        },
        onChange: function (data) {
          $("#profitValue").text(data.from + ' руб.');
          $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' руб.');
        },
      });
    });
  }

  showHideLicense() {
    const $openBtn = document.querySelector('[data-open-modal]')
    const $closeBtn = document.querySelector('[data-close-modal]')
    const $modal = document.querySelector('[data-modal]')
    const $licenseImg = document.querySelector('.license__img')

    $licenseImg.addEventListener('click', showModal);
    $openBtn.addEventListener('click', showModal);

    function showModal() {
      $modal.showModal();
    }

    $closeBtn.addEventListener('click', () => {
      $modal.close()
    })

    $modal.addEventListener('click', e => {
      const dialogDimentions = $modal.getBoundingClientRect()
      if (
        e.clientX < dialogDimentions.left ||
        e.clientX > dialogDimentions.right ||
        e.clientY < dialogDimentions.top ||
        e.clientY > dialogDimentions.bottom
      ) {
        $modal.close()
      }
    })
  }

  scroll() {
    let scrollToFirst, scrollToLast;
    const deviceWidth = document.documentElement.clientWidth

    if (deviceWidth > 768) {
      // desktop
      scrollToFirst = 2200;
      scrollToLast =2600
    } else {
      // mobile
      scrollToFirst = 3400;
      scrollToLast = 3800
    }

    const circles = document.querySelectorAll('.start__circle')

    function resetColors() {
      circles.forEach(c => { c.classList.remove('start__circle--active') })
    }

    window.addEventListener('scroll', () => {
      if (window.pageYOffset < scrollToFirst) {
        resetColors();
        circles[0].classList.add('start__circle--active')
      } else if (window.pageYOffset < scrollToLast) {
        resetColors();
        circles[1].classList.add('start__circle--active')
      } else if (window.pageYOffset > scrollToLast) {
        resetColors();
        circles[2].classList.add('start__circle--active')
      }
    })

  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
