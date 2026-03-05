/* ============================================
   LUMIÈRE — Contact Page JavaScript
   ============================================ */

(function () {
  'use strict';

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^[+]?[\d\s()-]{7,}$/;

  /* ----------------------------------------
     Tab Switching
     ---------------------------------------- */
  function initTabs() {
    var tabs = document.querySelectorAll('.form-tab');
    var contents = document.querySelectorAll('.tab-content');
    var successEl = document.getElementById('contact-success');

    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        /* Hide success state if visible */
        if (successEl) successEl.style.display = 'none';

        /* Show tab contents */
        tabs.forEach(function (t) { t.classList.remove('active'); });
        contents.forEach(function (c) { c.classList.remove('active'); });

        tab.classList.add('active');
        var targetId = 'tab-' + tab.getAttribute('data-tab');
        var targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('active');
      });
    });

    /* Auto-switch to appointment tab if URL hash is #appointment */
    if (window.location.hash === '#appointment') {
      var aptTab = document.querySelector('[data-tab="appointment"]');
      if (aptTab) aptTab.click();
    }
  }

  /* ----------------------------------------
     Validation Helpers
     ---------------------------------------- */
  function showError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.classList.add('visible');
  }

  function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.remove('error');
    if (error) error.classList.remove('visible');
  }

  function clearAllErrors(form) {
    var inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    var errors = form.querySelectorAll('.form-error');
    inputs.forEach(function (i) { i.classList.remove('error'); });
    errors.forEach(function (e) { e.classList.remove('visible'); });
  }

  /* ----------------------------------------
     Real-time Validation (blur)
     ---------------------------------------- */
  function initBlurValidation() {
    /* Inquiry form blur validation */
    addBlurValidator('inq-name', 'inq-name-error', function (v) { return v.trim().length > 0; });
    addBlurValidator('inq-email', 'inq-email-error', function (v) { return emailRegex.test(v.trim()); });
    addBlurValidator('inq-phone', 'inq-phone-error', function (v) { return v.trim() === '' || phoneRegex.test(v.trim()); });
    addBlurValidator('inq-subject', 'inq-subject-error', function (v) { return v !== ''; });
    addBlurValidator('inq-message', 'inq-message-error', function (v) { return v.trim().length > 0; });

    /* Appointment form blur validation */
    addBlurValidator('apt-name', 'apt-name-error', function (v) { return v.trim().length > 0; });
    addBlurValidator('apt-email', 'apt-email-error', function (v) { return emailRegex.test(v.trim()); });
    addBlurValidator('apt-phone', 'apt-phone-error', function (v) { return phoneRegex.test(v.trim()); });
    addBlurValidator('apt-date', 'apt-date-error', function (v) { return v !== ''; });
    addBlurValidator('apt-time', 'apt-time-error', function (v) { return v !== ''; });
    addBlurValidator('apt-service', 'apt-service-error', function (v) { return v !== ''; });
    addBlurValidator('apt-showroom', 'apt-showroom-error', function (v) { return v !== ''; });
  }

  function addBlurValidator(inputId, errorId, validateFn) {
    var el = document.getElementById(inputId);
    if (!el) return;

    el.addEventListener('blur', function () {
      if (!validateFn(el.value)) {
        showError(inputId, errorId);
      } else {
        clearError(inputId, errorId);
      }
    });

    /* Clear error on input */
    el.addEventListener('input', function () {
      clearError(inputId, errorId);
    });
  }

  /* ----------------------------------------
     Character Counters
     ---------------------------------------- */
  function initCharCounters() {
    addCharCounter('inq-message', 'inq-message-count');
    addCharCounter('apt-notes', 'apt-notes-count');
  }

  function addCharCounter(textareaId, counterId) {
    var textarea = document.getElementById(textareaId);
    var counter = document.getElementById(counterId);
    if (!textarea || !counter) return;

    textarea.addEventListener('input', function () {
      counter.textContent = textarea.value.length;
    });
  }

  /* ----------------------------------------
     Inquiry Form Submit
     ---------------------------------------- */
  function initInquiryForm() {
    var form = document.getElementById('inquiry-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearAllErrors(form);
      var valid = true;

      var name = document.getElementById('inq-name').value.trim();
      var email = document.getElementById('inq-email').value.trim();
      var phone = document.getElementById('inq-phone').value.trim();
      var subject = document.getElementById('inq-subject').value;
      var message = document.getElementById('inq-message').value.trim();

      if (!name) { showError('inq-name', 'inq-name-error'); valid = false; }
      if (!emailRegex.test(email)) { showError('inq-email', 'inq-email-error'); valid = false; }
      if (phone && !phoneRegex.test(phone)) { showError('inq-phone', 'inq-phone-error'); valid = false; }
      if (!subject) { showError('inq-subject', 'inq-subject-error'); valid = false; }
      if (!message) { showError('inq-message', 'inq-message-error'); valid = false; }

      if (!valid) return;

      /* Show success */
      showSuccess();
    });
  }

  /* ----------------------------------------
     Appointment Form Submit
     ---------------------------------------- */
  function initAppointmentForm() {
    var form = document.getElementById('appointment-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearAllErrors(form);
      var valid = true;

      var name = document.getElementById('apt-name').value.trim();
      var email = document.getElementById('apt-email').value.trim();
      var phone = document.getElementById('apt-phone').value.trim();
      var date = document.getElementById('apt-date').value;
      var time = document.getElementById('apt-time').value;
      var service = document.getElementById('apt-service').value;
      var showroom = document.getElementById('apt-showroom').value;

      if (!name) { showError('apt-name', 'apt-name-error'); valid = false; }
      if (!emailRegex.test(email)) { showError('apt-email', 'apt-email-error'); valid = false; }
      if (!phoneRegex.test(phone)) { showError('apt-phone', 'apt-phone-error'); valid = false; }
      if (!date) { showError('apt-date', 'apt-date-error'); valid = false; }
      if (!time) { showError('apt-time', 'apt-time-error'); valid = false; }
      if (!service) { showError('apt-service', 'apt-service-error'); valid = false; }
      if (!showroom) { showError('apt-showroom', 'apt-showroom-error'); valid = false; }

      if (!valid) return;

      /* Show success */
      showSuccess();
    });
  }

  /* ----------------------------------------
     Show Success State
     ---------------------------------------- */
  function showSuccess() {
    var tabs = document.querySelectorAll('.tab-content');
    var successEl = document.getElementById('contact-success');
    var tabBtns = document.querySelectorAll('.form-tab');

    tabs.forEach(function (t) { t.classList.remove('active'); });
    tabBtns.forEach(function (b) { b.classList.remove('active'); });
    if (successEl) successEl.style.display = 'block';
  }

  /* ----------------------------------------
     INIT
     ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTabs();
    initBlurValidation();
    initCharCounters();
    initInquiryForm();
    initAppointmentForm();
  });
})();
