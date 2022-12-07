"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var business_1 = require("./handlers/business");
var products_1 = require("./handlers/products");
var middleware_1 = require("./modules/middleware");
var router = (0, express_1.Router)();
// business
router.get('/business/:id', business_1.getBusiness);
router.put('/business/:id', middleware_1.handleInputErrors, business_1.updateBusiness);
router.post('/business', (0, express_validator_1.body)('name').isString(), middleware_1.handleInputErrors, business_1.createBusiness);
router["delete"]('/business/:id', business_1.deleteBusiness);
// product
router.get('/product', products_1.getAllProducts);
router.get('/product/:id', products_1.getProduct);
router.put('/product/:id', (0, express_validator_1.body)('name').isString().optional(), (0, express_validator_1.body)('description').optional().isString(), (0, express_validator_1.body)('images').isArray().optional(), 
//   body('businessId').exists().isString(),
middleware_1.handleInputErrors, products_1.updateProduct);
router.post('/product', (0, express_validator_1.body)('name').isString().exists(), (0, express_validator_1.body)('description').optional().isString(), (0, express_validator_1.body)('images').isArray().optional(), (0, express_validator_1.body)('businessId').exists().isString(), middleware_1.handleInputErrors, products_1.createProduct);
router["delete"]('/product/:id', products_1.deleteProduct);
router.use(function (err, req, res, next) {
    console.log(err);
    res.json({ message: 'router handler' });
});
exports["default"] = router;
//# sourceMappingURL=router.js.map