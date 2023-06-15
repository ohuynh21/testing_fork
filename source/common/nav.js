// @ts-check

/**
 * @file Creates a navigation menu that gets added to all pages on the web app,
 * linking all pages with each other.
 */

/**
 * Defines an entry in the navigation menu.
 * @typedef {object} Link
 * @property {string} label - The text to show for the link.
 * @property {string} url - The URL of the page to link to.
 * @property {string} imageUrl - The URL of the image icon to show next to the
 * link text.
 */

/**
 * The list of entries in the navigation menu.
 * @type {Link[]}
 */
const links = [
  {
    label: "Home",
    url: "../home-page/",
    imageUrl: "../common/icons/home.svg",
  },
  {
    label: "Love Compatibility",
    url: "../Zodiac_compatibility/",
    imageUrl: "../home-page/Images/craiyon_142342_zodiac_wheel_tarot_card.png",
  },
  {
    label: "Fortune Cookie",
    url: "../FortuneCookie/",
    imageUrl:
      "../home-page/Images/craiyon_115136_tarot_card_with_fortune_cookie.png",
  },
  {
    label: "Palm Reading",
    url: "../PalmReading/",
    imageUrl:
      "../home-page/Images/craiyon_144054_a_tarot_card_depicting_palmistry.png",
  },
];

/**
 * The created `<nav>` element that gets prepended to `<body>` containing the
 * navigation menu.
 * @type {HTMLElement}
 */
const nav = document.createElement("nav");
nav.className = "site-nav";

/**
 * The menu icon, which is a focusable element to allow the menu contents to be
 * tab accessible.
 * @type {HTMLAnchorElement}
 */
const menuButton = document.createElement("a");
menuButton.className = "site-nav-menu-icon";
menuButton.tabIndex = 0;
nav.append(menuButton);

for (const { label, imageUrl, url } of links) {
  const link = document.createElement("a");
  link.className = "site-nav-link";
  link.href = url;
  nav.append(link);

  const image = document.createElement("img");
  image.className = "site-nav-image";
  image.src = imageUrl;

  link.append(image, label);
}

document.body.prepend(nav);
