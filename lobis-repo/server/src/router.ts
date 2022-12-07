import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import {
  createBusiness,
  deleteBusiness,
  getBusiness,
  updateBusiness,
} from './handlers/business';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from './handlers/products';
import { handleInputErrors } from './modules/middleware';

const router = Router();

// business
router.get('/business/:id', getBusiness);
router.put('/business/:id', handleInputErrors, updateBusiness);
router.post(
  '/business',
  body('name').isString(),
  handleInputErrors,
  createBusiness
);
router.delete('/business/:id', deleteBusiness);

// product
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put(
  '/product/:id',
  body('name').isString().optional(),
  body('description').optional().isString(),
  body('images').isArray().optional(),
  //   body('businessId').exists().isString(),
  handleInputErrors,
  updateProduct
);
router.post(
  '/product',
  body('name').isString().exists(),
  body('description').optional().isString(),
  body('images').isArray().optional(),
  body('businessId').exists().isString(),
  handleInputErrors,
  createProduct
);
router.delete('/product/:id', deleteProduct);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: 'router handler' });
});

export default router;
