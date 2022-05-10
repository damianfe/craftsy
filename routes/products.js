
  
const express = require('express');
const router = express.Router();
const multer = require('multer');

//const controlador = require('../controllers/productController')
const {cart,detail,getByCategory, search, add, store,edit, update,remove} = require('../controllers/productController');

/* MULTER */
 const storage = multer.diskStorage({
     
  destination: function (req, file, callback) { 
    callback(null, './public/images/avatars'); 
 }, 
 filename: function (req, file, cb) { 
    callback(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
 

/* /products */
router
    .get('/add',add)
    .post('/add',store)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .get('/cart', cart)
    .get('/detail/:id', detail)
    .get('/category/:idCategory/:idProduct?',getByCategory)
    .get('/search',search)
    .delete('/remove/:id',remove)

module.exports = router;