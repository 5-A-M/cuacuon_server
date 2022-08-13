import express from "express"
import uploadCloud from "../cloudinary/upload.js"
import contact_advise from "../controller/contact_advise.js"
import { delete_product } from "../controller/delete_product.js"
import { apiDetailAccessory } from "../controller/detail_accessory.js"
import { apiDetailLuxury } from "../controller/detail_door_luxury.js"
import { apiDetailProduct } from "../controller/detail_product.js"
import { get_advise_contact } from "../controller/get_advise_contact.js"
import { apiLogin } from "../controller/login.js"
import { product_cuacuon } from "../controller/product_cuacuon.js"
import product_cuacuon_luxury from "../controller/product_cuacuon_luxury.js"
import { product_list } from "../controller/product_list.js"
import { update_product } from "../controller/update_product.js"
import { uploadimage } from "../controller/uploadimage.js"
import { uploadInfo } from "../controller/uploadInfo.js"
import { uploadPhukien } from "../controller/uploadPhukien.js"

const router= express.Router()

router.post("/api/v2/upload", uploadCloud.single("file"), uploadimage)
router.post("/api/v2/info/cuacuon", uploadInfo)
router.post("/api/v2/info/phukien", uploadPhukien)
router.get("/api/v1/get/product/category", product_list)
router.get("/api/v1/get/cuacuon", product_cuacuon)
router.get("/api/v1/get/cuacuon/luxury", product_cuacuon_luxury)
router.get("/api/v1/get/detail/door_luxury", apiDetailLuxury)
router.get("/api/v1/get/detail/door", apiDetailProduct)
router.get("/api/v1/get/detail/accessory", apiDetailAccessory)
router.put("/change/product", update_product)
router.delete("/delete/product", delete_product)
router.post("/admin/login", apiLogin)
router.post("/contact/advise", contact_advise)
router.get("/api/v1/advise/contact", get_advise_contact)

export default router