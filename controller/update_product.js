import { dbconnection } from "../database/init.js"
import { ObjectId } from "./detail_product.js"

export const update_product=async (req, response)=> {
    const data= req.body
    const id_product= req.body._id
    delete data.is_admin
    delete data.is_edit
    delete data._id
    if(data.is_accessory) {
        delete data.is_accessory
    }
    dbconnection.collection("cua").updateOne({_id: new ObjectId(id_product)}, { $set: data}, function(err, res) {
        if(err) throw err
        if(res.matchedCount > 0) {
            return response.json("hihihi")
        }
    })
    dbconnection.collection("cua_luxury").updateOne({_id: new ObjectId(id_product)}, { $set: data}, function(err, res) {
        if(err) throw err
        if(res.matchedCount > 0) {
            return response.json("hihihi")
        }
    })
    dbconnection.collection("phukien").updateOne({_id: new ObjectId(id_product)}, { $set: data}, function(err, res) {
        if(err) throw err
        if(res.matchedCount > 0) {
            return response.json("hihihi")
        }
    })
}