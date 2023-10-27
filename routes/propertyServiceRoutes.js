import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
import { uploadMultipleImages } from "../middleware/uploadMultipleImages.js";
import { uploadSingleImage } from "../middleware/uploadSingleImage.js";

const router = express.Router();

/**
 *
 * location routes
 */
router.post(
  "/createLocation",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createLocation`)
);

router.get(
  "/getAllLocations",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllLocations`)
);

router.get(
  "/getLocationById/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getLocationById`)
);

router.patch(
  "/updateLocationById",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateLocationById`)
);

router.delete(
  "/deleteLocationById/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteLocationById`)
);

/**
 *
 * block routes
 */
router.post(
  "/createBlock",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createBlock`)
);

router.get(
  "/getAllBlocks/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllBlocks`)
);

router.get(
  "/getBlockById/:blockId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getBlockById`)
);

router.patch(
  "/updateBlockById",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateBlockById`)
);

router.delete(
  "/deleteBlockById/:blockId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteBlockById`)
);

/**
 *
 * floor routes
 */
router.post(
  "/createFloor",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createFloor`)
);

router.get(
  "/getAllFloors/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllFloors`)
);

router.get(
  "/getFloorById/:floorId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getFloorById`)
);

router.patch(
  "/updateFloorById",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateFloorById`)
);

router.delete(
  "/deleteFloorById/:floorId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteFloorById`)
);

/**
 *
 * amenity routes
 */
router.post(
  "/createAmenity",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createAmenity`)
);

router.get(
  "/getAllAmenities/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllAmenities`)
);

router.patch(
  "/updateImage",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateImage`)
);
router.get(
  "/getAmenityById/:amenityId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAmenityById`)
);

router.patch(
  "/updateAmenityById",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateAmenityById`)
);

router.delete(
  "/deleteAmenityById/:amenityId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteAmenityById`)
);

/**
 *
 * room type routes
 */
router.post(
  "/createRoomType",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createRoomType`)
);

router.get(
  "/getAllRoomTypes/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllRoomTypes`)
);

router.get(
  "/getRoomTypeById/:roomTypeId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getRoomTypeById`)
);

router.patch(
  "/updateRoomTypeById",
  uploadMultipleImages,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateRoomTypeById`)
);

router.delete(
  "/deleteRoomTypeById/:roomTypeId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteRoomTypeById`)
);

/**
 *
 * room routes
 */
router.post(
  "/createRoom",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createRoom`)
);

router.get(
  "/getAllRooms/:locationId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllRooms`)
);

router.get(
  "/getRoomByRoomType",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getRoomByRoomType`)
);
router.get(
  "/getRoomById/:roomId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getRoomById`)
);

router.patch(
  "/updateRoomById",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updateRoomById`)
);

router.delete(
  "/deleteRoomById/:roomId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deleteRoomById`)
);

/**
 *
 * property routes
 */
router.post(
  "/createProperty",
  uploadSingleImage,
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createProperty`)
);

router.get(
  "/getAllProperties",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllProperties`)
);

router.get(
  "/getPropertyById/:propertyId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getPropertyById`)
);

router.patch(
  "/updatePropertyById",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updatePropertyById`)
);

router.patch(
  "/updatePropertyStatusById",
  redirectRequest(
    `${process.env.PROPERTY_SERVICE_URL}/updatePropertyStatusById`
  )
);

router.delete(
  "/deletePropertyById/:propertyId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/deletePropertyById`)
);

/**
 *
 * pms routes
 */
router.post(
  "/createPms",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/createPms`)
);

router.get(
  "/getAllPms",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getAllPms`)
);

router.get(
  "/getPmsById/:pmsId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/getPmsById`)
);

router.patch(
  "/updatePmsById/:pmsId",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/updatePmsById`)
);

/**
 * loadStartingContent routes
 */

router.post(
  "/loadStartingContent",
  redirectRequest(`${process.env.PROPERTY_SERVICE_URL}/loadStartingContent`)
);

export default router;
