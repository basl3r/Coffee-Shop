export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    pages: '#pages',
    homepage: '#homepage #products',
    product: '#product-list',
    contact: '#contact'
  },
  classes: {
    product: {
      image: '.product-image',
      description: '.product-description'
    }, 
    nav: {
      links: '.main-nav a',
    }
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};

