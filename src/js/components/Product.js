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
    const thisProduct = this;
    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    thisProduct.element2 = utils.createDOMFromHTML(generatedHTML);
  
    const isEven = thisProduct.data.index % 2 === 0;
    console.log(isEven);
  
    /* create wrapper div */
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product-wrapper');
  
    /* add element to wrapper */
    if (isEven) {
      const productDescription = thisProduct.element.querySelector(select.classes.product.description);

      productDescription.classList.add('product-description-right');

      productWrapper.appendChild(thisProduct.element.querySelector(select.classes.product.image));
      productWrapper.appendChild(thisProduct.element.querySelector('.product-description-right'));

    } else {
      productWrapper.appendChild(thisProduct.element.querySelector(select.classes.product.description));
      productWrapper.appendChild(thisProduct.element.querySelector(select.classes.product.image));
    }
  
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.product);
    const menuContainer2 = document.querySelector(select.containerOf.homepage);
  
    /* add wrapper to menu */
    menuContainer.appendChild(productWrapper);
    menuContainer2.appendChild(productWrapper.cloneNode(true));
  }
}

export default Product;