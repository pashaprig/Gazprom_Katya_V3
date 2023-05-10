// MENU

class App {
  init() {
    this.initMobileMenu();
    this.initRange();
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
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
