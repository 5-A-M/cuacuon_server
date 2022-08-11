import { dbconnection } from "../database/init.js"
import mongodb from "mongodb"

export const ObjectId= mongodb.ObjectId
export const apiDetailProduct= (req, res)=> {
    dbconnection.collection("cua")
    .find({ _id: new ObjectId(req.query._id) })
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}