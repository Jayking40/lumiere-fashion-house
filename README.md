# LUMIÈRE — Team Guide for Group Members
### A Beginner-Friendly Explanation of the Entire Project

> **Written by the group leader for the rest of the team.**
> This document explains everything from scratch — what HTML, CSS, and JavaScript are,
> how each section of `index.html` works, what the CSS does, what every JavaScript
> function does, and what `dom.html` is all about. Read it carefully and you will
> understand the whole project.

---

## TABLE OF CONTENTS

1. [The Big Picture — What Are These Three Languages?](#1-the-big-picture)
2. [How the Project Folder Is Organised](#2-project-folder-structure)
3. [HTML — The Language of Structure](#3-html-the-language-of-structure)
4. [CSS — The Language of Style](#4-css-the-language-of-style)
5. [JavaScript — The Language of Behaviour](#5-javascript-the-language-of-behaviour)
6. [Deep Dive: `index.html` — Section by Section](#6-deep-dive-indexhtml)
7. [Deep Dive: `css/style.css` — How the Home Page Is Styled](#7-deep-dive-cssstylecss)
8. [Deep Dive: `js/main.js` — Shared JavaScript](#8-deep-dive-jsmainsjs)
9. [Deep Dive: `js/home.js` — Home Page JavaScript](#9-deep-dive-jshomejs)
10. [Deep Dive: `dom.html` — The DOM Structure Page](#10-deep-dive-domhtml)
11. [How Everything Connects Together](#11-how-everything-connects)
12. [Resources to Learn More](#12-resources-to-learn-more)

---

## 1. The Big Picture

When you open any website in a browser (Chrome, Edge, Firefox, etc.), three technologies
are always working together:

| Language       | Role                          | Real-world analogy                          |
|----------------|-------------------------------|---------------------------------------------|
| **HTML**       | Structure / Skeleton          | The bones and rooms of a building           |
| **CSS**        | Style / Appearance            | The paint, furniture, and decoration        |
| **JavaScript** | Behaviour / Interactivity     | The electricity — lights, doors, lifts      |

For **LUMIÈRE**, our luxury fashion house website:
- **HTML** defines every heading, paragraph, image, button, link, and section you see.
- **CSS** makes it all look dark, elegant, and gold — the fonts, colours, animations, grid layouts.
- **JavaScript** powers things that *react* to the user — the preloader, hamburger menu, scroll animations, newsletter form, and more.

---

## 2. Project Folder Structure

```
lumiere/
│
├── index.html          ← Home page (the one you land on first)
├── about.html          ← About the brand
├── products.html       ← Collections / shop page
├── events.html         ← Upcoming events
├── contact.html        ← Contact & appointment booking
├── dom.html            ← Interactive DOM tree diagram page
│
├── css/
│   └── style.css       ← ONE stylesheet for ALL pages
│
├── js/
│   ├── main.js         ← JavaScript shared by every page (navbar, menu, animations…)
│   ├── home.js         ← JavaScript only for index.html
│   ├── products.js     ← JavaScript only for products.html
│   ├── events.js       ← JavaScript only for events.html
│   └── contact.js      ← JavaScript only for contact.html
│
└── images/             ← All image files used across the site
```

**The key rule:** Every HTML page links to `css/style.css` for its styles, and
every page loads `js/main.js`. Each page then loads its own specific JS file on top.

---

## 3. HTML — The Language of Structure

### What is HTML?

HTML stands for **HyperText Markup Language**. It is not a programming language —
it is a *markup* language. That means you use it to *describe* what things are,
not to give the computer instructions to follow step by step.

### Tags and Elements

HTML works with **tags**. A tag is a word wrapped in angle brackets `< >`.

```html
<p>This is a paragraph.</p>
```

- `<p>` is the **opening tag** — it starts the element.
- `</p>` is the **closing tag** — it ends the element.
- Everything between them is the **content**.

Some tags don't need a closing tag (they are *self-closing*):

```html
<img src="photo.jpg" alt="A photo">
<meta charset="UTF-8">
<link rel="stylesheet" href="css/style.css">
```

### Attributes

Attributes give extra information to a tag. They always go inside the opening tag:

```html
<a href="about.html" class="nav-link">About</a>
```

- `href="about.html"` — tells the link where to go
- `class="nav-link"` — gives the element a name so CSS and JS can find it

### The Skeleton of Every HTML Page

Every HTML file in this project starts with this structure:

```html
<!DOCTYPE html>          <!-- Tells the browser this is modern HTML5 -->
<html lang="en">         <!-- Root element; lang="en" means English -->
<head>
  <!-- INVISIBLE to users — metadata, links to CSS, page title -->
</head>
<body>
  <!-- VISIBLE to users — everything you see on screen -->
</body>
</html>
```

### Common Tags Used in This Project

| Tag           | What it does                                      |
|---------------|---------------------------------------------------|
| `<head>`      | Contains page metadata (title, CSS links, fonts)  |
| `<body>`      | Contains everything the user sees                 |
| `<nav>`       | Navigation bar                                    |
| `<main>`      | Main content of the page                          |
| `<section>`   | A thematic section of content                     |
| `<div>`       | A generic container (no meaning, just a box)      |
| `<h1>`–`<h6>` | Headings, h1 being the biggest                   |
| `<p>`         | Paragraph of text                                 |
| `<a>`         | A link (anchor)                                   |
| `<img>`       | An image                                          |
| `<ul>` / `<li>` | Unordered list and list item                   |
| `<button>`    | A clickable button                                |
| `<form>`      | A form for user input                             |
| `<input>`     | A text / email / password input field             |
| `<span>`      | Inline container (like `<div>` but inside text)   |
| `<footer>`    | The footer at the bottom of the page              |
| `<script>`    | Loads a JavaScript file                           |
| `<link>`      | Links an external CSS file                        |

---

## 4. CSS — The Language of Style

### What is CSS?

CSS stands for **Cascading Style Sheets**. You use it to control how HTML elements
*look* — their colour, font size, spacing, layout, and animations.

### How CSS Targets HTML Elements

CSS works in rules. Each rule has a **selector** (what to target) and
**declarations** (what to change):

```css
/* This targets every <p> tag on the page */
p {
  color: #8A8A8A;       /* text colour — grey */
  font-size: 1rem;      /* font size — 16px */
  margin-bottom: 1rem;  /* space below the paragraph */
}
```

### Selectors

| Selector       | Example         | What it targets                               |
|----------------|-----------------|-----------------------------------------------|
| Tag            | `p`             | Every `<p>` element                           |
| Class          | `.navbar`       | Any element with `class="navbar"`             |
| ID             | `#hero`         | The single element with `id="hero"`           |
| Descendant     | `.navbar a`     | Every `<a>` that is inside `.navbar`          |
| Pseudo-class   | `a:hover`       | An `<a>` tag when the mouse hovers over it    |
| Pseudo-element | `p::before`     | Content inserted before a `<p>` element       |

### CSS Variables (Custom Properties)

In `style.css`, instead of typing the same colour or spacing value dozens of times,
we define **variables** once at the top:

```css
:root {
  --color-gold: #C9A84C;
  --color-bg:   #0a0a0a;
  --space-8:    2rem;
}
```

Then we *use* them anywhere:

```css
.btn-primary {
  background: var(--color-gold);   /* uses the variable */
  padding: var(--space-8);
}
```

If you ever want to change the gold colour across the entire site, you change it
in **one place** inside `:root {}` and it updates everywhere automatically.

### The Box Model

Every HTML element is treated as a box by CSS:

```
┌─────────────────────────────┐
│         MARGIN              │  ← space outside the box
│  ┌───────────────────────┐  │
│  │       BORDER          │  │  ← the border line
│  │  ┌─────────────────┐  │  │
│  │  │    PADDING      │  │  │  ← space inside the box
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │  ← the actual text/image
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### CSS Grid and Flexbox

Two modern layout tools used heavily in this project:

- **Flexbox** — arranges items in a single row or column. Perfect for navbars,
  button groups, and centering things.
- **CSS Grid** — arranges items in rows AND columns simultaneously. Perfect for
  the featured products grid and the footer layout.

```css
/* Flexbox example: put items in a row, centred */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Grid example: 3 equal columns */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
```

---

## 5. JavaScript — The Language of Behaviour

### What is JavaScript?

JavaScript (JS) is the only true programming language of the three. It lets you
write *instructions* the browser follows — react to clicks, validate forms,
animate elements, build timers, and more.

### How JavaScript is Loaded

At the **bottom** of every HTML page, just before `</body>`, you will find:

```html
<script src="js/main.js"></script>
<script src="js/home.js"></script>
```

Scripts go at the bottom so the entire HTML page loads *first* before JavaScript
tries to find and work with elements on the page.

### Basic JavaScript Concepts

**Variables** — containers that store values:
```js
var name = 'LUMIÈRE';
var count = 5;
var isVisible = true;
```

**Functions** — reusable blocks of instructions:
```js
function sayHello() {
  console.log('Hello, world!');
}
sayHello(); // calls the function
```

**Selecting Elements from HTML** — JS finds HTML elements using:
```js
document.querySelector('.navbar')        // finds the first element with class "navbar"
document.querySelectorAll('.reveal')     // finds ALL elements with class "reveal"
document.getElementById('newsletter-form') // finds element with id="newsletter-form"
```

**Events** — JS *listens* for things that happen (clicks, scrolling, typing):
```js
button.addEventListener('click', function () {
  // this code runs every time the button is clicked
  alert('Button was clicked!');
});
```

**Modifying Classes** — adding/removing CSS classes is the main way JS changes
how things look:
```js
element.classList.add('visible');     // adds the class
element.classList.remove('hidden');   // removes the class
element.classList.toggle('open');     // adds if missing, removes if present
```

### The IIFE Pattern (Used Throughout This Project)

All our JS files wrap their code in an **IIFE** (Immediately Invoked Function Expression):

```js
(function () {
  'use strict';

  // all code goes here

})();
```

The outer `(function() { ... })()` creates a private scope — variables inside
cannot accidentally clash with variables in other scripts. `'use strict'` turns on
strict error checking. This is considered best practice.

---

## 6. Deep Dive: `index.html`

`index.html` is the **home page** — the first page a visitor sees.
Let's go through it section by section.

---

### 6.1 — The `<head>` Block (Lines 1–17)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="LUMIÈRE — Maison de Mode...">
  <meta property="og:title" content="LUMIÈRE — Luxury Fashion House">
  <meta property="og:description" content="Haute couture redefined...">
  <meta name="theme-color" content="#0a0a0a">
  <link rel="icon" ...>
  <title>LUMIÈRE — Maison de Mode</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond...">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/...">
  <link rel="stylesheet" href="css/style.css">
</head>
```

**What each line does:**

- `<!DOCTYPE html>` — Declares this is an HTML5 document. Must always be first.
- `<html lang="en">` — The root element. `lang="en"` helps screen readers and search engines know the language.
- `<meta charset="UTF-8">` — Tells the browser to use UTF-8 character encoding so special characters (like É in LUMIÈRE) display correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — Makes the page **responsive**. Without this, mobile devices would zoom out and show a tiny desktop page.
- `<meta name="description">` — The description shown in Google search results under the page title.
- `<meta property="og:title">` and `<meta property="og:description">` — **Open Graph** tags. These control how the page looks when shared on WhatsApp, Twitter, Facebook, etc.
- `<meta name="theme-color" content="#0a0a0a">` — On mobile Chrome, this colours the browser address bar black to match our dark theme.
- `<link rel="icon" ...>` — The small icon shown in the browser tab (the ✦ symbol).
- `<title>` — The text shown in the browser tab.
- The two `<link rel="preconnect">` tags — Tells the browser to start connecting to Google Fonts early, speeding up font loading.
- `<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond...">` — Loads two custom fonts from Google Fonts: **Cormorant Garamond** (elegant serif, used for headings) and **Jost** (clean sans-serif, used for body text and labels).
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome/...">` — Loads **Font Awesome**, a library of thousands of icons used throughout the site (the location pin, envelope, phone, social media icons, etc.).
- `<link rel="stylesheet" href="css/style.css">` — **THE most important link** — loads our own stylesheet that styles the entire site.

---

### 6.2 — The Preloader (Lines 20–24)

```html
<!-- Preloader -->
<div class="preloader">
  <div class="preloader-mark">✦</div>
  <div class="preloader-text">LUMIÈRE</div>
</div>
```

**What it is:** A full-screen overlay that shows the LUMIÈRE logo while the page is loading.
As soon as the page finishes loading, `main.js` hides this overlay with a fade-out.

- `.preloader` — The full-screen dark cover (styled in CSS to cover the whole viewport).
- `.preloader-mark` — The gold ✦ symbol.
- `.preloader-text` — The "LUMIÈRE" text.

The JavaScript in `main.js` (see Section 8.1) listens for the `window load` event
and then adds a `hidden` class to `.preloader`, which triggers a CSS fade-out.

---

### 6.3 — The Navigation Bar (Lines 26–48)

```html
<!-- Navigation -->
<nav class="navbar">
  <div class="container">
    <a href="index.html" class="logo">
      <span class="logo-mark">✦</span>
      <span class="logo-text">LUMIÈRE</span>
      <span class="logo-sub">MAISON DE MODE</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="products.html">Collection</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html#appointment" class="nav-cta">Book Appointment</a>
    <button class="hamburger" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
```

**Breaking it down:**

- `<nav>` — Semantic HTML element that tells the browser "this is a navigation area".
- `class="navbar"` — CSS uses this class to style the top bar (dark background, fixed position, etc.).
- `<div class="container">` — A wrapper that limits the content width and centres it on large screens. Almost every section uses `.container`.
- `<a href="index.html" class="logo">` — The logo is actually a link back to the home page. Inside it are three `<span>` elements: the ✦ symbol, the brand name, and the subtitle.
- `<ul class="nav-links">` — An unordered list of navigation links. Using `<ul>` and `<li>` for nav links is semantic best practice and helps screen readers.
- `<a href="contact.html#appointment" class="nav-cta">` — The golden "Book Appointment" button. The `#appointment` in the href is an **anchor link** — it scrolls directly to the element with `id="appointment"` on the contact page.
- `<button class="hamburger">` — The three-line menu icon shown on mobile screens. Its three `<span>` children become the three horizontal lines via CSS. JavaScript transforms them into an X when clicked.
- `aria-label="Toggle menu"` — Accessibility attribute. Since the button has no text (only visual lines), this label tells screen readers what the button does.

**JavaScript behaviour:** `main.js` adds a `scrolled` class to `.navbar` when you scroll past 60px, which changes the navbar background. It also handles the hamburger menu toggling (see Section 8.2 and 8.3).

---

### 6.4 — The Mobile Navigation (Lines 50–58)

```html
<!-- Mobile Nav -->
<div class="mobile-nav">
  <a href="index.html">Home</a>
  <a href="products.html">Collection</a>
  <a href="about.html">About</a>
  <a href="events.html">Events</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html#appointment" class="nav-cta" style="margin-top: 1rem;">Book Appointment</a>
</div>
```

This is a **separate navigation panel** that slides in from the right on small/mobile screens.
It is hidden by default (CSS `display: none` or off-screen). When the hamburger button is
clicked, JavaScript adds the class `open` to `.mobile-nav`, which CSS uses to slide it into view.

---

### 6.5 — The Marquee Ticker (Lines 60–65)

```html
<!-- Marquee Ticker -->
<div class="marquee-wrapper">
  <div class="marquee-track">
    <span>✦ PARIS FASHION WEEK — MARCH 2025 ... </span>
  </div>
</div>
```

This is the scrolling text banner you see right under the navbar — like a news ticker.

- `.marquee-wrapper` — The outer container. CSS hides overflow so you only see the text as it scrolls through.
- `.marquee-track` — The inner element that CSS animates from right to left using `@keyframes`.
- The `<span>` holds the text content.

**JavaScript trick:** `main.js` (Section 8.6) clones the `<span>` and appends a second copy to `.marquee-track`. This makes the scrolling appear **seamless and infinite** — when the first copy scrolls away, the second copy is right behind it.

---

### 6.6 — The `<main>` Element and Hero Section (Lines 67–90)

```html
<main>
  <!-- ===== HERO SECTION ===== -->
  <section class="hero" style="background-image: url('/images/hero-home.jpg'); ...">
    <div class="hero-watermark">01</div>
    <div class="container">
      <div class="hero-content">
        <span class="section-label hero-anim">S/S 2025 COLLECTION</span>
        <h1>
          <span class="line hero-anim">Where Fashion</span>
          <span class="line hero-anim"><em>Meets Art</em></span>
        </h1>
        <p class="hero-subtitle hero-anim">Redefining elegance...</p>
        <div class="hero-buttons hero-anim">
          <a href="products.html" class="btn-primary">Explore Collection</a>
          <a href="about.html" class="btn-ghost">Our Story →</a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Scroll</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </section>
```

**What each part does:**

- `<main>` — Semantic wrapper for the page's main content. Only one `<main>` per page.
- `<section class="hero">` — The large full-screen opening area.
- `style="background-image: url('/images/hero-home.jpg')"` — This is **inline CSS** written directly on the HTML element. It sets the background image of the hero section. Inline styles override stylesheet styles (use sparingly).
- `<div class="hero-watermark">01</div>` — The large decorative number "01" shown as a watermark in the background of the hero. Pure decoration.
- `class="section-label hero-anim"` — An element can have **multiple classes** (separated by spaces). This element gets both the `.section-label` style (gold uppercase label) AND `.hero-anim` behaviour (JavaScript will animate it in with a delay).
- `<h1>` — The most important heading on the page. There should only be one `<h1>` per page. It contains two `<span>` elements so each line can be animated in independently.
- `<em>Meets Art</em>` — The `<em>` tag makes text italic. In our CSS, `em` elements are also styled gold to create the visual accent.
- `class="btn-primary"` — Makes the link look like a solid gold button. Even though it is an `<a>` tag (a link), CSS makes it look like a button.
- `class="btn-ghost"` — A transparent button with no background, just text.
- `<i class="fa-solid fa-chevron-down"></i>` — A Font Awesome icon. The classes `fa-solid` and `fa-chevron-down` tell Font Awesome to render a downward chevron arrow icon.
- `.scroll-indicator` — The small "Scroll ↓" indicator at the bottom of the hero.

**JavaScript behaviour:** `home.js` (Section 9.1) finds all `.hero-anim` elements and adds the class `visible` to each one with staggered time delays, creating a sequential fade-in animation effect as the page loads.

---

### 6.7 — Stats Bar Section (Lines 92–114)

```html
<section class="stats-bar reveal">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">15+</div>
        <div class="stat-label">Years of Excellence</div>
      </div>
      <!-- ... 3 more stat-items ... -->
    </div>
  </div>
</section>
```

Displays four statistics: **15+ Years**, **3 Awards**, **500+ Pieces**, **12 Showrooms**.

- `class="stats-bar reveal"` — Again, two classes. `.stats-bar` handles the layout and styling. `.reveal` is special — it means "animate this section in when the user scrolls to it". JavaScript watches all `.reveal` elements and adds `is-visible` when they enter the screen (see Section 8.4).
- `.stats-grid` — CSS grid that displays the four stats side by side.
- `.stat-number` — The large number (styled in CSS with the display font and gold colour).
- `.stat-label` — The small description text below the number.

---

### 6.8 — Featured Collection Section (Lines 116–157)

```html
<section class="section-lg">
  <div class="container">
    <span class="section-label reveal">FEATURED COLLECTION</span>
    <h2 class="section-heading reveal">The Art of <em>Refined</em> Living</h2>
    <div class="featured-grid reveal">
      <div class="featured-card">
        <div class="card-image">
          <img src="/images/eternal-gown.webp" alt="L'Éternel Evening Gown..." loading="lazy" ...>
        </div>
        <div class="card-overlay">
          <h3>L'Éternel Evening Gown</h3>
          <p class="card-price">₦450,000</p>
          <a href="products.html" class="card-link">View Details →</a>
        </div>
      </div>
      <!-- ... 2 more featured-cards ... -->
    </div>
    <div class="text-center" style="margin-top: var(--space-10);">
      <a href="products.html" class="btn-outline">View All Pieces →</a>
    </div>
  </div>
</section>
```

Displays three featured product cards in a grid.

- `loading="lazy"` — A performance optimisation. It tells the browser not to load the image immediately — only load it when the user is about to scroll to it. This makes the initial page load faster.
- `alt="..."` — The **alt text** on images. If the image fails to load, this text shows instead. It is also essential for accessibility (screen readers read this aloud for visually impaired users) and for SEO.
- `.card-overlay` — CSS positions this as an overlay that slides up from the bottom when you hover over the card.
- `style="margin-top: var(--space-10);"` — Inline CSS using a CSS variable to add spacing.
- `.btn-outline` — The bordered transparent button styled in CSS.

---

### 6.9 — Brand Statement Section (Lines 159–166)

```html
<section class="brand-statement section reveal">
  <div class="container">
    <div class="quote-mark">"</div>
    <blockquote>We do not create fashion. We create heritage.</blockquote>
    <p class="attribution">— LUMIÈRE, Founding Manifesto, 2010</p>
  </div>
</section>
```

A simple, powerful quote section. The `<blockquote>` tag is the semantic HTML element
for quoting someone. CSS styles this with large elegant typography and centres it
with a very dramatic visual layout.

---

### 6.10 — Upcoming Events Preview Section (Lines 168–212)

```html
<section class="section">
  <div class="container">
    <span class="section-label reveal">MARK YOUR CALENDAR</span>
    <h2 class="section-heading reveal">Upcoming <em>Events</em></h2>
    <div class="events-preview-grid">
      <div class="event-preview-card reveal">
        <img src="https://images.unsplash.com/..." alt="..." loading="lazy" ...>
        <div class="event-date-block">
          <div class="day">28</div>
          <div class="month-year">FEB 2025</div>
        </div>
        <h3>Trunk Show</h3>
        <p class="event-location"><i class="fa-solid fa-location-dot"></i> Lagos, Nigeria</p>
        <p class="event-desc">Private viewing of the Autumn/Winter archive collection.</p>
        <a href="events.html" class="btn-ghost btn-sm">Learn More →</a>
      </div>
      <!-- ... 2 more event-preview-cards ... -->
    </div>
    <div class="text-center" style="margin-top: var(--space-8);">
      <a href="events.html" class="btn-outline">View All Events →</a>
    </div>
  </div>
</section>
```

Displays a preview of three upcoming events. Notice the images here use
**Unsplash URLs** (external images from the internet) instead of local files.

- `<i class="fa-solid fa-location-dot"></i>` — Font Awesome map pin icon.
- `.event-date-block` — Displays the day and month/year in a styled block.
- `.btn-sm` — A modifier class that makes the button smaller.

---

### 6.11 — Newsletter Section (Lines 214–231)

```html
<section class="section">
  <div class="container">
    <div class="newsletter reveal" style="background-image: url('https://images.unsplash.com/...'); ...">
      <div class="newsletter-content">
        <h3>Stay in the <em>Know</em></h3>
        <p>Be first to hear about new collections...</p>
      </div>
      <div>
        <form class="newsletter-form" id="newsletter-form">
          <input type="email" class="form-input" placeholder="Your email address"
                 id="newsletter-email" required>
          <button type="submit" class="btn-primary">Subscribe</button>
        </form>
        <div class="newsletter-message" id="newsletter-message"></div>
      </div>
    </div>
  </div>
</section>
```

A newsletter sign-up form with a background image.

- `<form id="newsletter-form">` — The `id` is critical here. `home.js` uses `document.getElementById('newsletter-form')` to find and work with this form.
- `type="email"` — Tells the browser this input expects an email address. The browser will do basic email validation automatically.
- `required` — HTML attribute that prevents form submission if the field is empty.
- `placeholder="Your email address"` — The greyed-out hint text shown before the user types.
- `<div id="newsletter-message">` — An empty div where `home.js` will inject success/error messages after form submission. It starts empty and is populated by JavaScript.

**JavaScript behaviour:** `home.js` (Section 9.2) intercepts the form submission, validates the email with a regular expression (a pattern for checking email format), and then either shows an error message or a success message — all without reloading the page.

---

### 6.12 — The Footer (Lines 235–286)

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">...</div>
      <div class="footer-links">...</div>
      <div class="footer-contact">...</div>
      <div class="footer-social">...</div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 LUMIÈRE Maison de Mode. All Rights Reserved.</p>
    </div>
  </div>
</footer>
```

The footer is a four-column grid laid out with CSS Grid:

1. **`.footer-brand`** — Logo and brand description.
2. **`.footer-links`** — Quick navigation links.
3. **`.footer-contact`** — Address, email, phone number with Font Awesome icons.
4. **`.footer-social`** — Social media icon links (Instagram, X/Twitter, Pinterest, TikTok).

The `<footer>` tag is semantic HTML that tells the browser (and screen readers) this
is the footer of the page.

---

### 6.13 — The Script Tags (Lines 288–289)

```html
<script src="js/main.js"></script>
<script src="js/home.js"></script>
```

These two lines, placed right before `</body>`, load the JavaScript files.

- **`main.js`** is loaded first — it handles everything shared across all pages.
- **`home.js`** is loaded second — it handles home-page-specific features.

The order matters: `main.js` must come first because `home.js` may depend on
patterns or conventions established in `main.js`.

---

## 7. Deep Dive: `css/style.css`

The stylesheet is 2,700+ lines, so here are the key sections that affect `index.html`:

### 7.1 — CSS Variables (`:root`)

```css
:root {
  --color-bg: #0a0a0a;          /* Nearly black background */
  --color-gold: #C9A84C;        /* The gold accent colour */
  --color-gold-light: #E8D5A3;  /* Lighter gold for hover states */
  --color-text: #F5F0E8;        /* Off-white text colour */
  --color-text-muted: #8A8A8A;  /* Grey for body paragraph text */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Jost', sans-serif;
}
```

All colours, fonts, and spacing values are defined here as variables so they
can be reused anywhere in the file.

### 7.2 — CSS Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

The `*` selector targets **every** element on the page. This reset removes all
default browser spacing (browsers add default margins/padding to elements like
`<body>`, `<h1>`, `<p>`, etc.) so we start from a blank slate and control
all spacing ourselves.

### 7.3 — The `.reveal` Animation System

One of the most elegant systems in this stylesheet:

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

By default, every `.reveal` element is invisible (`opacity: 0`) and shifted
30px downward. When JavaScript adds the `is-visible` class (triggered by scrolling),
the CSS transition smoothly fades the element in and slides it up to its normal
position. This creates the beautiful scroll-reveal animations you see throughout
the site.

### 7.4 — The Navbar

```css
.navbar {
  position: fixed;        /* Stays at the top even when you scroll */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;          /* Sits on top of all other content */
  background: transparent;
  transition: background var(--transition-base), ...;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);   /* Blurs content behind the navbar */
}
```

The navbar starts transparent (over the hero image). Once you scroll past 60px,
JavaScript adds `.scrolled` and the CSS transition kicks in — creating the
frosted glass effect.

### 7.5 — The Marquee Animation

```css
.marquee-track {
  display: flex;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

`@keyframes` defines a CSS animation. This one moves the `.marquee-track` element
from its starting position (`translateX(0)`) to halfway across (`translateX(-50%)`)
over 30 seconds, looping forever (`infinite`). Since JavaScript duplicated the
text content, when the track has moved -50%, the duplicate is in the exact position
the original started — making it loop seamlessly.

### 7.6 — The `.btn-primary` Button

```css
.btn-primary {
  background: var(--color-gold);
  color: var(--color-bg);
  padding: 1rem 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);    /* Lifts the button slightly on hover */
  box-shadow: var(--shadow-gold); /* Adds a gold glow on hover */
}
```

### 7.7 — Responsive Design with Media Queries

```css
@media (max-width: 768px) {
  .nav-links { display: none; }      /* Hide desktop nav on mobile */
  .hamburger { display: flex; }      /* Show hamburger button on mobile */
  .featured-grid { grid-template-columns: 1fr; }  /* Stack cards vertically */
}
```

Media queries apply styles only when the screen is a certain size.
`max-width: 768px` means "apply these styles when the screen is 768px wide or less"
(i.e., tablets and phones).

---

## 8. Deep Dive: `js/main.js`

`main.js` is loaded on **every page** of the site. It handles all shared behaviour.

### 8.1 — `initPreloader()`

```js
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
```

**Step by step:**
1. Finds the `.preloader` element.
2. `if (!preloader) return;` — **Guard clause**: if the element doesn't exist on the current page, stop immediately. This pattern is used in every function throughout the file.
3. Listens for `window load` — this fires after ALL page resources (images, fonts, CSS) have finished loading. This is different from `DOMContentLoaded` which fires when just the HTML is parsed.
4. `setTimeout(..., 800)` — Waits 800ms (almost a second) before hiding the preloader to give fonts a moment to render.
5. Adds `hidden` class to the preloader (CSS transitions it out).
6. Adds `loaded` to `<body>` (allows hero animations to start).
7. After another 600ms (the CSS transition duration), completely removes the preloader from the DOM using `.remove()`.

---

### 8.2 — `initNavbarScroll()`

```js
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
```

Listens to the `scroll` event. `window.scrollY` is how many pixels the user has
scrolled down. If more than 60px, `.scrolled` is added to the navbar — CSS then
applies the frosted glass background. `{ passive: true }` is a performance hint
telling the browser this listener will never call `e.preventDefault()`, allowing
smoother scrolling.

---

### 8.3 — `initMobileMenu()`

```js
function initMobileMenu() {
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');
  ...
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  ...
}
```

**What happens when hamburger is clicked:**
- `.hamburger` gets `active` class → CSS rotates the three lines into an X shape.
- `.mobile-nav` gets `open` class → CSS slides the nav panel into view.
- `document.body.style.overflow = 'hidden'` → Prevents the page behind from scrolling while the mobile menu is open. When the menu closes, overflow is reset to `''` (empty, meaning default scrollable).

Also closes the menu when any link inside the mobile nav is clicked.

---

### 8.4 — `initRevealAnimations()`

```js
function initRevealAnimations() {
  var reveals = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(function (el) { observer.observe(el); });
}
```

Uses the **Intersection Observer API** — a browser built-in tool that watches when
elements enter or exit the visible viewport (the area you can see on screen).

- `threshold: 0.15` — Fire the callback when 15% of the element is visible.
- `rootMargin: '0px 0px -50px 0px'` — Shrinks the detection area by 50px at the bottom, so elements animate in slightly before reaching the very bottom of the screen.
- `entry.isIntersecting` — True when the element is in view.
- `observer.unobserve(entry.target)` — Once animated in, stop watching that element (no need to keep checking it — it won't animate out again).

---

### 8.5 — `initActiveNavLink()`

```js
function initActiveNavLink() {
  var navLinks = document.querySelectorAll('.nav-links a');
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}
```

`window.location.pathname` gives the current URL path, e.g. `/about.html`.
`.split('/').pop()` extracts just the filename (`about.html`).
Compares each nav link's `href` to the current filename — if they match, adds
`active` class to highlight that link in gold.

---

### 8.6 — `initMarquee()`

```js
function initMarquee() {
  var track = document.querySelector('.marquee-track');
  var spans = track.querySelectorAll('span');

  spans.forEach(function (span) {
    var clone = span.cloneNode(true);  // makes an exact copy of the span
    track.appendChild(clone);          // appends the copy to the track
  });
}
```

`cloneNode(true)` creates an exact duplicate of the `<span>` (the `true` means
clone all children too). Appending it means the text track now has double the
content. The CSS animation moves it -50%, which brings the copy to the exact
starting position of the original — creating a seamless infinite loop.

---

### 8.7 — `initSmoothScroll()`

Intercepts clicks on links that start with `#` (anchor links like `#appointment`)
and instead of jumping abruptly, smoothly scrolls to the target element while
accounting for the fixed navbar height.

---

### 8.8 — `initCustomCursor()`

Creates a custom circular cursor that follows your mouse with a slight lag
(creating a smooth trailing effect). It grows larger when hovering over
interactive elements (links, buttons, cards). This is disabled on touch devices
since they have no mouse.

---

### 8.9 — `initImageFadeIn()`

Listens for every `<img>` element's `load` event. Once an image loads, the
`loaded` class is added, which CSS uses to transition the image from `opacity: 0`
to `opacity: 1` — creating a gentle fade-in instead of images popping in abruptly.

---

### 8.10 — The Init Block

```js
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
```

`DOMContentLoaded` fires as soon as the HTML is fully parsed (before images load).
All nine functions are called here — this is the entry point of the entire script.

---

## 9. Deep Dive: `js/home.js`

`home.js` runs only on `index.html` and handles two things:

### 9.1 — `initHeroAnimation()`

```js
function initHeroAnimation() {
  var heroElements = document.querySelectorAll('.hero-anim');
  var delays = [0, 200, 400, 600, 800];

  heroElements.forEach(function (el, index) {
    var delay = delays[index] || index * 200;
    setTimeout(function () {
      el.classList.add('visible');
    }, delay + 300);
  });
}
```

Finds all five `.hero-anim` elements:
1. The section label ("S/S 2025 COLLECTION")
2. The first headline line ("Where Fashion")
3. The second headline line ("Meets Art")
4. The subtitle paragraph
5. The buttons

Adds `visible` class to each one with an increasing delay (0ms, 200ms, 400ms,
600ms, 800ms) plus an extra 300ms buffer for the preloader to finish.
The CSS then animates each element from invisible/below to visible/in-position.
This creates the beautiful **staggered entrance animation** on the hero section.

---

### 9.2 — `initNewsletterForm()`

```js
function initNewsletterForm() {
  var form = document.getElementById('newsletter-form');
  var emailInput = document.getElementById('newsletter-email');
  var message = document.getElementById('newsletter-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();   // STOPS the page from reloading on form submit

    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showMessage('Please enter your email address.', 'error');
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    showMessage('Thank you! You\'ve been added to our exclusive list. ✦', 'success');
    emailInput.value = '';  // Clears the input field
  });
}
```

**Key concepts:**
- `e.preventDefault()` — Normally, submitting a form causes a full page reload (the default browser behaviour). This line cancels that so we can handle the submission ourselves with JavaScript.
- `emailInput.value.trim()` — Gets the typed value and removes any leading/trailing spaces.
- `emailRegex` — A **regular expression** pattern. `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` checks that the email has text, then `@`, then more text, then `.`, then more text. It validates the email format.
- `.test(email)` — Returns `true` if the email matches the pattern, `false` if not.
- `showMessage()` — A helper function defined inside `initNewsletterForm` that sets the text content of `#newsletter-message` and adds either `success` or `error` CSS class to style it green or red.

---

## 10. Deep Dive: `dom.html`

### What is the DOM?

**DOM** stands for **Document Object Model**. When a browser loads an HTML file, it
reads the HTML and builds a **tree structure** in memory where every element becomes
a **node** (an object). This tree is the DOM.

```
html
├── head
│   ├── meta
│   ├── title
│   └── link
└── body
    ├── nav  (.navbar)
    │   ├── div  (.logo)
    │   └── ul  (.nav-links)
    │       ├── li > a (Home)
    │       ├── li > a (Collection)
    │       └── ...
    ├── main
    │   ├── section  (.hero)
    │   ├── section  (.stats-bar)
    │   └── ...
    └── footer
```

JavaScript interacts with this tree to change the page dynamically — without
reloading it. Every time you call `document.querySelector()` or
`element.classList.add()`, you are manipulating the DOM.

### What `dom.html` Does

`dom.html` is a dedicated page that **visually displays** this DOM tree for
`index.html` in an interactive diagram. It was built for educational/presentation
purposes — to show the structure of the site visually.

**Structure of `dom.html`:**

It has the same navbar, marquee, and footer as every other page (they share `style.css`
and `main.js`). The main unique content is two sections:

#### Section 1 — Interactive DOM Tree

```html
<div class="dom-tree reveal" id="dom-tree">
  <!-- Tree is built by JS below -->
</div>
```

This `div` starts completely empty. An inline `<script>` at the bottom of the
page contains a data object called `treeData` that describes the entire structure
of `index.html` as a JavaScript object, and a `buildNode()` function that
recursively creates HTML `<li>` elements for each node in the tree.

**The `treeData` object:**
```js
var treeData = {
  tag: 'html', children: [
    { tag: 'head', children: [...] },
    { tag: 'body', children: [
      { tag: 'nav', cls: '.navbar', children: [...] },
      { tag: 'main', children: [
        { tag: 'section', cls: '.hero', children: [...] },
        ...
      ]},
      { tag: 'footer', children: [...] }
    ]}
  ]
};
```

Each node object has:
- `tag` — the HTML element name (`div`, `nav`, `section`, etc.)
- `cls` — the CSS class (e.g. `.navbar`)
- `children` — an array of child nodes (this makes it recursive)
- `text` / `attr` — descriptive text for leaf nodes

**The `buildNode()` function** recursively converts each node object into an
actual `<li>` DOM element with a label and, if it has children, a nested `<ul>`.
It also attaches a click event listener to parent nodes so clicking them
collapses or expands their children (`li.classList.toggle('collapsed')`).

**`DOMContentLoaded` event:** Once the DOM is ready, `buildNode(treeData)` is
called, and the resulting tree is appended to `#dom-tree`.

#### Section 2 — Site Map

A visual flowchart showing how all six pages of the site connect — `index.html`
at the top, with lines branching down to `products.html`, `about.html`,
`events.html`, `contact.html`, and `dom.html`. This is purely HTML and CSS —
no JavaScript required.

---

## 11. How Everything Connects Together

```
Browser requests index.html
        │
        ▼
HTML is parsed → DOM is built in memory
        │
        ▼
<link rel="stylesheet" href="css/style.css"> → CSS is applied → Page becomes styled
        │
        ▼
<script src="js/main.js"> → Loaded & executed
<script src="js/home.js"> → Loaded & executed
        │
        ▼
DOMContentLoaded fires → All init functions run:
  - Preloader shown → hidden after 800ms
  - Navbar watches scroll
  - Hamburger menu connected
  - Reveal animations set up
  - Active nav link highlighted
  - Marquee text duplicated
  - Smooth scroll enabled
  - Custom cursor created
  - Hero elements stagger in
  - Newsletter form validated
        │
        ▼
User interacts → JS responds in real-time:
  - Scrolls → navbar changes, sections animate in
  - Clicks hamburger → mobile nav opens
  - Submits newsletter → email validated, message shown
  - Moves mouse → custom cursor follows
```

---

## 12. Resources to Learn More

If you want to go deeper on any of these topics, here are the best free resources:

### For Complete Beginners

| Resource | Link | Best For |
|----------|------|----------|
| **W3Schools** | https://www.w3schools.com | Learning HTML, CSS, JS with simple examples and a live code editor. Start here. |
| **freeCodeCamp** | https://www.freecodecamp.org | Free structured courses from zero to job-ready. Excellent for beginners. |
| **The Odin Project** | https://www.theodinproject.com | Free, project-based web dev curriculum. Very thorough. |

### For Reference (When You Need to Look Something Up)

| Resource | Link | Best For |
|----------|------|----------|
| **MDN Web Docs** | https://developer.mozilla.org | The most complete and accurate reference for HTML, CSS, and JavaScript. Industry standard. |
| **CSS-Tricks** | https://css-tricks.com | Deep articles on CSS, especially Flexbox and Grid. |
| **JavaScript.info** | https://javascript.info | The best free book for learning JavaScript properly from scratch. |

### Specific Topics Used in This Project

| Topic | Link |
|-------|------|
| HTML Elements Reference | https://www.w3schools.com/tags/default.asp |
| CSS Flexbox Guide | https://css-tricks.com/snippets/css/a-guide-to-flexbox/ |
| CSS Grid Guide | https://css-tricks.com/snippets/css/complete-guide-grid/ |
| CSS Animations & `@keyframes` | https://www.w3schools.com/css/css3_animations.asp |
| JavaScript DOM Manipulation | https://www.w3schools.com/js/js_htmldom.asp |
| Intersection Observer API | https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API |
| CSS Custom Properties | https://www.w3schools.com/css/css3_variables.asp |
| Regular Expressions (Regex) | https://www.w3schools.com/js/js_regexp.asp |
| Font Awesome Icons | https://fontawesome.com/icons |
| Google Fonts | https://fonts.google.com |

---

> **Final Note from the Group Leader:**
> This project (`LUMIÈRE — Maison de Mode`) was built as a multi-page luxury fashion
> house website. Every page you see — Home, Collection, About, Events, Contact, and
> the DOM page — was carefully thought out and built from scratch. The code is clean,
> well-commented, and follows professional practices. Study it, open each file in your
> code editor, change values, break things, fix them — that is the best way to learn.
>
> 🔗 **GitHub Repository:** https://github.com/Jayking40/lumiere-fashion-house
