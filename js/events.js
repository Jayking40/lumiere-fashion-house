/* ============================================
   LUMIÈRE — Events Page JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ----------------------------------------
     Countdown Timer
     ---------------------------------------- */
  function initCountdown() {
    var daysEl = document.getElementById('countdown-days');
    var hoursEl = document.getElementById('countdown-hours');
    var minutesEl = document.getElementById('countdown-minutes');
    var secondsEl = document.getElementById('countdown-seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    /* Target date: April 12, 2025, 19:00 WAT (UTC+1) */
    var targetDate = new Date('2025-04-12T19:00:00+01:00').getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = targetDate - now;

      if (distance < 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ----------------------------------------
     RSVP Modal
     ---------------------------------------- */
  function initRSVPModal() {
    var modal = document.getElementById('rsvp-modal');
    var formContainer = document.getElementById('rsvp-form-container');
    var successContainer = document.getElementById('rsvp-success');
    var form = document.getElementById('rsvp-form');
    var closeBtn = modal ? modal.querySelector('.modal-close') : null;
    var cancelBtn = document.getElementById('rsvp-cancel');
    var eventNameEl = document.getElementById('rsvp-event-name');
    var eventInput = document.getElementById('rsvp-event');
    var rsvpBtns = document.querySelectorAll('.rsvp-btn');

    if (!modal || !form) return;

    /* Open modal */
    rsvpBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var eventName = btn.getAttribute('data-event') || '';
        if (eventNameEl) eventNameEl.textContent = eventName;
        if (eventInput) eventInput.value = eventName;

        /* Reset to form view */
        formContainer.style.display = 'block';
        successContainer.style.display = 'none';
        form.reset();
        if (eventInput) eventInput.value = eventName;
        clearErrors();

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    /* Close modal */
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    /* Validation */
    function showError(id) {
      var errEl = document.getElementById(id);
      var input = errEl ? errEl.previousElementSibling : null;
      if (errEl) errEl.classList.add('visible');
      if (input) input.classList.add('error');
    }

    function clearErrors() {
      var errors = form.querySelectorAll('.form-error');
      var inputs = form.querySelectorAll('.form-input, .form-textarea');
      errors.forEach(function (e) { e.classList.remove('visible'); });
      inputs.forEach(function (i) { i.classList.remove('error'); });
    }

    /* Submit */
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var name = document.getElementById('rsvp-name').value.trim();
      var email = document.getElementById('rsvp-email').value.trim();
      var phone = document.getElementById('rsvp-phone').value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var phoneRegex = /^[+]?[\d\s()-]{7,}$/;
      var valid = true;

      if (!name) {
        showError('rsvp-name-error');
        valid = false;
      }
      if (!emailRegex.test(email)) {
        showError('rsvp-email-error');
        valid = false;
      }
      if (!phoneRegex.test(phone)) {
        showError('rsvp-phone-error');
        valid = false;
      }

      if (!valid) return;

      /* Show success */
      formContainer.style.display = 'none';
      successContainer.style.display = 'block';
    });
  }

  /* ----------------------------------------
     INIT
     ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initCountdown();
    initRSVPModal();
  });
})();
