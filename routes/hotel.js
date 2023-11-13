import express from "express"
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js"
import {verifyAdmin} from "../utils/verify.js"

const router = express.Router();

router.route('/')
  .post(verifyAdmin, createHotel)
  .get(getHotels)
router.route('/:id')
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel)
router.get("/find/:id", getHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router
