import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  
  constructor (id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.render();
  }

  render() {
    /* Generowanie dwoch widokow homepage, product-list*/
    const thisProduct = this;
    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    thisProduct.element2 = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.product);
    const menuContainer2 = document.querySelector(select.containerOf.homepage);

    console.log('thisProduct', thisProduct);

    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
    menuContainer2.appendChild(thisProduct.element2);
  }
}

export default Product;