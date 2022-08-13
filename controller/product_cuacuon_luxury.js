import { dbconnection } from "../database/init.js"

const product_cuacuon_luxury = (req, res) => {
    dbconnection.collection("cua_luxury")
    .find({})
    .toArray((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}

export default product_cuacuon_luxury