/* DILU.JS 4.15 March 2023 by Dilushanka for Helalk */
/*!
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
