import { dbconnection } from "../database/init.js"    
// import cua from "../schema/cuacuon.js"

export const product_cuacuon= (req, res)=> {
    dbconnection.collection("cua")
    .find({})
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}