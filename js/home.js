/* ============================================
   LUMIÈRE — Home Page JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ----------------------------------------
     Hero Stagger Animation
     ---------------------------------------- */
  function initHeroAnimation() {
    var heroElements = document.querySelectorAll('.hero-anim');
    if (!heroElements.length) return;

    var delays = [0, 200, 400, 600, 800];

    heroElements.forEach(function (el, index) {
      var delay = delays[index] || index * 200;
      setTimeout(function () {
        el.classList.add('visible');
      }, delay + 300); /* Extra 300ms for preloader */
    });
  }

  /* ----------------------------------------
     Newsletter Form Validation
     ---------------------------------------- */
  function initNewsletterForm() {
    var form = document.getElementById('newsletter-form');
    var emailInput = document.getElementById('newsletter-email');
    var message = document.getElementById('newsletter-message');
    if (!form || !emailInput || !message) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = emailInput.value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      /* Reset state */
      message.classList.remove('visible', 'success', 'error');

      if (!email) {
        showMessage('Please enter your email address.', 'error');
        return;
      }

      if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }

      /* Success */
      showMessage('Thank you! You\'ve been added to our exclusive list. ✦', 'success');
      emailInput.value = '';
    });

    function showMessage(text, type) {
      message.textContent = text;
      message.className = 'newsletter-message';
      /* Force reflow before adding classes */
      void message.offsetWidth;
      message.classList.add('visible', type);
    }
  }

  /* ----------------------------------------
     INIT
     ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initHeroAnimation();
    initNewsletterForm();
  });
})();
