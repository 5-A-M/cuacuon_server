import { dbconnection } from "../database/init.js"
import mongodb from "mongodb"

export const ObjectId= mongodb.ObjectId
export const apiDetailProduct= (req, res)=> {
    dbconnection.collection("cua")
    .find({ _id: new ObjectId(req.query._id) })
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        if(docs.length > 0) {
            return res.json(docs)
        }
    })
    dbconnection.collection("cua_luxury")
    .find({ _id: new ObjectId(req.query._id) })
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        if(docs.length) {
            return res.json(docs)
        }
    })
}