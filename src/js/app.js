import { select, settings, templates } from './settings.js';
import utils from './utils.js';
import Product from './components/Product.js';

const app = {

  initMenu: function() {
    const thisApp = this;
    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function() {
    console.log('Starting fetching data');
    
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;

    thisApp.data = {};
    console.log('url', url);

    fetch(url)
      .then(function(rawResponse) {
        return rawResponse.json();
      })
      .then(function(parsedResponse) {

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu method */
        thisApp.initMenu();

      });

    console.log('thisApp after fetch: ', thisApp);

  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
  },

  initPages: function() {

    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.classes.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id === idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();

        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');

        // run thisApp.activatePage with that id
        thisApp.activatePage(id);

        // change URL hash
        window.location.hash = '#/' + id;

      });
    }
  },

  activatePage: function(pageId) {
    const thisApp = this;
  
    // Remove 'active' class from all links
    thisApp.navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Add 'active' class to the clicked link
    const activeLink = document.querySelector(`a[href="#${pageId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  
    /* add class 'active' to matching page, remove from non-matching */
    for (let page of thisApp.pages) {
      if (page.id === pageId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    }
  },
};

app.init();


console.log(select);
console.log(templates);
console.log(utils);

