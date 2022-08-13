import { dbconnection } from "../database/init.js"

export const get_advise_contact= (req, res)=> {
    dbconnection.collection("contact")
    .find({})
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}