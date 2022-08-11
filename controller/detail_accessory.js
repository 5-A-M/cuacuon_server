import { dbconnection } from "../database/init.js"
import mongodb from "mongodb"

export const apiDetailAccessory= (req, res)=> {
    const ObjectId= mongodb.ObjectId
    dbconnection.collection("phukien")
    .find({ _id: new ObjectId(req.query._id) })
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}