const {check} = require('express-validator');

module.exports=[

check('name')
    .notEmpty()
    .withMessage('el nombre del producto obligatorio')
    .isLength({min:3,max:20}).

check('price')
    .notEmpty()
     .withMessage(''),
check('category')
    .notEmpty()
     .withMessage(''),
check('origin')
    .notEmpty()
    .withMessage(''),
    
check('state')
   .notEmpty()  
   .withMessage('')  
    

]