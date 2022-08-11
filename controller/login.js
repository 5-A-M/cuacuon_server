import { dbconnection } from "../database/init.js"

export const apiLogin= (req, res)=> {
    dbconnection.collection("admin")
    .find({account: req.body.account, password: req.body.password})
    .toArray((err, docs)=> {
        if(err) throw err
        if(docs.length > 0) {
            return res.json("success")
        }
        else {
            return res.json("failed")
        }
    })
}