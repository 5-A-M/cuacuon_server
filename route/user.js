import express from "express"
import uploadCloud from "../cloudinary/upload.js"
import { apiDetailAccessory } from "../controller/detail_accessory.js"
import { apiDetailLuxury } from "../controller/detail_door_luxury.js"
import { apiDetailProduct } from "../controller/detail_product.js"
import { product_cuacuon } from "../controller/product_cuacuon.js"
import { product_list } from "../controller/product_list.js"
import { uploadimage } from "../controller/uploadimage.js"
import { uploadInfo } from "../controller/uploadInfo.js"
import { uploadPhukien } from "../controller/uploadPhukien.js"

const router= express.Router()

router.post("/api/v2/upload", uploadCloud.single("file"), uploadimage)
router.post("/api/v2/info/cuacuon", uploadInfo)
router.post("/api/v2/info/phukien", uploadPhukien)
router.get("/api/v1/get/cuacuon", product_cuacuon)
router.get("/api/v1/get/detail/door_luxury", apiDetailLuxury)
router.get("/api/v1/get/detail/door", apiDetailProduct)
router.get("/api/v1/get/detail/accessory", apiDetailAccessory)
router.get("/api/v1/get/product/category", product_list)

export default router