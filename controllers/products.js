const path = require('path');
const rootDir = require('../util/path');
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }

  exports.getContact = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}

exports.postContact = (req,res,next)=>{
  console.log(req.body);
  res.redirect('/success');
}