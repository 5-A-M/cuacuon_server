import { dbconnection } from "../database/init.js"
import mongodb from "mongodb"

export const apiDetailLuxury= (req, res)=> {
    const ObjectId= mongodb.ObjectId
    dbconnection.collection("cua_luxury")
    .find({ _id: new ObjectId(req.query._id) })
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}