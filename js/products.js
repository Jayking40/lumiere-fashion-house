/* ============================================
   LUMIÈRE — Products Page JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ----------------------------------------
     Filter Functionality
     ---------------------------------------- */
  function initFilters() {
    var pills = document.querySelectorAll('.filter-pill');
    var cards = document.querySelectorAll('.product-card');
    if (!pills.length || !cards.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        /* Update active pill */
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        var filter = pill.getAttribute('data-filter');

        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ----------------------------------------
     Wishlist Toggle
     ---------------------------------------- */
  function initWishlist() {
    var wishlistBtns = document.querySelectorAll('.product-wishlist');
    wishlistBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        btn.classList.toggle('active');
        var icon = btn.querySelector('i');
        if (btn.classList.contains('active')) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
        } else {
          icon.classList.remove('fa-solid');
          icon.classList.add('fa-regular');
        }
      });
    });
  }

  /* ----------------------------------------
     Quick View Modal
     ---------------------------------------- */
  function initQuickView() {
    var modal = document.getElementById('quick-view-modal');
    var modalName = document.getElementById('modal-product-name');
    var modalPrice = document.getElementById('modal-product-price');
    var modalDesc = document.getElementById('modal-product-desc');
    var modalImage = document.getElementById('modal-product-image');
    var closeBtn = modal ? modal.querySelector('.modal-close') : null;
    var quickViewBtns = document.querySelectorAll('.quick-view-btn');
    var sizeBtns = modal ? modal.querySelectorAll('.size-btn') : [];

    if (!modal || !quickViewBtns.length) return;

    /* Open modal */
    quickViewBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var card = btn.closest('.product-card');
        if (!card) return;

        modalName.textContent = card.getAttribute('data-name') || '';
        modalPrice.textContent = card.getAttribute('data-price') || '';
        modalDesc.textContent = card.getAttribute('data-desc') || '';

        var cardImg = card.querySelector('.product-card-image img');
        if (cardImg && modalImage) {
          modalImage.src = cardImg.src;
          modalImage.alt = cardImg.alt;
          modalImage.classList.add('loaded');
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    /* Close modal */
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    /* Size selector */
    sizeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        sizeBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }

  /* ----------------------------------------
     INIT
     ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initFilters();
    initWishlist();
    initQuickView();
  });
})();
