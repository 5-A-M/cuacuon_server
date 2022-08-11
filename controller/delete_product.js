import { dbconnection } from "../database/init.js"
import { ObjectId } from "./detail_product.js"

export const delete_product= (req, response)=> {
    const data= req.body
    const id_product= req.body._id
    delete data.is_admin
    delete data.is_edit
    delete data._id
    if(data.is_accessory) {
        delete data.is_accessory
    }
    dbconnection.collection("cua").deleteOne({_id: new ObjectId(id_product)}, function(err, res) {
        if(err) throw err
        if(res.deletedCount > 0) {
            return response.json("hihihi")
        }
    })
    dbconnection.collection("cua_luxury").deleteOne({_id: new ObjectId(id_product)}, function(err, res) {
        if(err) throw err
        if(res.deletedCount > 0) {
            return response.json("hihihi")
        }
    })
    dbconnection.collection("phukien").deleteOne({_id: new ObjectId(id_product)}, function(err, res) {
        if(err) throw err
        if(res.deletedCount > 0) {
            return response.json("hihihi")
        }
    })
}