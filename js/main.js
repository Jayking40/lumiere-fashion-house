/* ============================================
   LUMIÈRE — Main JavaScript
   Shared across all pages
   ============================================ */

(function () {
  'use strict';

  /* ----------------------------------------
     1. PRELOADER
     ---------------------------------------- */
  function initPreloader() {
    var preloader = document.querySelector('.preloader');
    if (!preloader) return;

    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
        document.body.classList.add('loaded');
        setTimeout(function () {
          preloader.remove();
        }, 600);
      }, 800);
    });
  }

  /* ----------------------------------------
     2. NAVBAR SCROLL BEHAVIOR
     ---------------------------------------- */
  function initNavbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------
     3. MOBILE HAMBURGER MENU
     ---------------------------------------- */
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    var mobileLinks = mobileNav.querySelectorAll('a');

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Close on overlay click (outside links) */
    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------
     4. INTERSECTION OBSERVER — REVEAL
     ---------------------------------------- */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------
     5. ACTIVE NAV LINK
     ---------------------------------------- */
  function initActiveNavLink() {
    var navLinks = document.querySelectorAll('.nav-links a');
    var mobileLinks = document.querySelectorAll('.mobile-nav a');
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function setActive(links) {
      links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    setActive(navLinks);
    setActive(mobileLinks);
  }

  /* ----------------------------------------
     6. MARQUEE — Duplicate text for seamless loop
     ---------------------------------------- */
  function initMarquee() {
    var track = document.querySelector('.marquee-track');
    if (!track) return;

    var spans = track.querySelectorAll('span');
    if (spans.length === 0) return;

    /* Duplicate all spans for seamless loop */
    spans.forEach(function (span) {
      var clone = span.cloneNode(true);
      track.appendChild(clone);
    });
  }

  /* ----------------------------------------
     7. SMOOTH ANCHOR SCROLL
     ---------------------------------------- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var navHeight = document.querySelector('.navbar')
        ? document.querySelector('.navbar').offsetHeight
        : 0;

      window.scrollTo({
        top: target.offsetTop - navHeight - 20,
        behavior: 'smooth',
      });
    });
  }

  /* ----------------------------------------
     8. CUSTOM CURSOR (Desktop only)
     ---------------------------------------- */
  function initCustomCursor() {
    /* Skip on touch devices */
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    var cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    var mouseX = 0;
    var mouseY = 0;
    var cursorX = 0;
    var cursorY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform =
        'translate(' + cursorX + 'px, ' + cursorY + 'px)';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    /* Grow on interactive elements */
    var interactiveEls = document.querySelectorAll(
      'a, button, .filter-pill, .product-card, .dom-node-label'
    );
    interactiveEls.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('active');
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('active');
      });
    });
  }

  /* ----------------------------------------
     9. IMAGE LOAD FADE-IN
     ---------------------------------------- */
  function initImageFadeIn() {
    document.querySelectorAll('img').forEach(function (img) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });
        img.addEventListener('error', function () {
          /* Fallback if Unsplash image fails to load */
          img.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a)';
          img.style.opacity = '1';
          img.classList.add('loaded');
        });
      }
    });
  }

  /* ----------------------------------------
     INIT — Run on DOMContentLoaded
     ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initNavbarScroll();
    initMobileMenu();
    initRevealAnimations();
    initActiveNavLink();
    initMarquee();
    initSmoothScroll();
    initCustomCursor();
    initImageFadeIn();
  });
})();
