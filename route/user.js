import express from "express"
import uploadCloud from "../cloudinary/upload.js"
import { apiDetailProduct } from "../controller/detail_product.js"
import { product_cuacuon } from "../controller/product_cuacuon.js"
import { uploadimage } from "../controller/uploadimage.js"
import { uploadInfo } from "../controller/uploadInfo.js"
import { uploadPhukien } from "../controller/uploadPhukien.js"

const router= express.Router()

router.post("/api/v2/upload", uploadCloud.single("file"), uploadimage)
router.post("/api/v2/info/cuacuon", uploadInfo)
router.post("/api/v2/info/phukien", uploadPhukien)
router.get("/api/v1/get/cuacuon", product_cuacuon)
router.get("/api/v1/get/detail/door", apiDetailProduct)

export default router