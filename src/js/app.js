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
  },
};

app.init();


console.log(select);
console.log(templates);
console.log(utils);

