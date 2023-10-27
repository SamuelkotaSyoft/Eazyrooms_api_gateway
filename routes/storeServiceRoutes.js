import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
import { uploadMultipleImages } from "../middleware/uploadMultipleImages.js";

const router = express.Router();

/**
 *
 * store routes
 */

router.post(
  "/createStore",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createStore`)
);

router.get(
  "/getAllStores/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getAllStores`)
);

router.get(
  "/getStoreById/:storeId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getStoreById`)
);

router.patch(
  "/updateStoreById",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/updateStoreById`)
);

router.delete(
  "/deleteStoreById/:storeId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/deleteStoreById`)
);

router.get(
  "/storeSearch/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/storeSearch`)
);

router.get(
  "/searchAll/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/searchAll`)
);
/**
 *
 * store category routes
 */
router.post(
  "/createStoreCategory",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createStoreCategory`)
);

router.get(
  "/getAllStoreCategories/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getAllStoreCategories`)
);

router.get(
  "/getStoreCategoryById/:storeCategoryId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getStoreCategoryById`)
);

router.patch(
  "/updateStoreCategoryById",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/updateStoreCategoryById`)
);

router.delete(
  "/deleteStoreCategoryById/:storeCategoryId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/deleteStoreCategoryById`)
);

/**
 *
 * store locations routes
 */

router.post(
  "/createStoreLocation",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createStoreLocation`)
);

router.get(
  "/getAllStoreLocations/:storeId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getAllStoreLocations`)
);

router.get(
  "/getStoreLocationById/:storeLocationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getStoreLocationById`)
);

router.patch(
  "/updateStoreLocationById",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/updateStoreLocationById`)
);

router.delete(
  "/deleteStoreLocationById/:storeLocationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/deleteStoreLocationById`)
);

/**
 *
 * product routes
 */

router.post(
  "/createProduct",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createProduct`)
);

router.post(
  "/createAddOn",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createAddOn`)
);

router.post(
  "/createTags",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createTags`)
);

router.get(
  "/getAllProducts/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getAllProducts`)
);

router.get(
  "/getAllProductFilters/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getAllProductFilters`)
);

router.get(
  "/getProductById/:productId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getProductById`)
);

router.patch(
  "/updateProductById/:productId",
  uploadMultipleImages,
  redirectRequest(`${process.env.STORE_SERVICE_URL}/updateProductById`)
);

router.delete(
  "/deleteProductById/:productId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/deleteProductById`)
);

/**
 * cart routes
 */

router.post(
  "/createCart",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/createCart`)
);

router.post(
  "/getCartItems",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getCartItems`)
);

router.post(
  "/updateCartItemsByProductId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/updateCartItemsByProductId`)
);

router.get(
  "/getOrdersByLocationId/:locationId",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/getOrdersByLocationId`)
);

router.post(
  "/deleteFile",
  redirectRequest(`${process.env.STORE_SERVICE_URL}/deleteFile`)
);
export default router;
