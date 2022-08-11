import { dbconnection } from "../database/init.js"    
// import cua from "../schema/cuacuon.js"

export const product_list= (req, res)=> {
    if(req.params.category=== "cua-thep-luxury") {
        dbconnection.collection("cua-luxury")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.json(docs)
        })
    }
    if(req.params.category=== "cua-thep-van-go") {
        dbconnection.collection("cua")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.json(docs)
        })
    }
    if(req.params.category=== "phu-kien-cua") {
        dbconnection.collection("phukien")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.json(docs)
        })
    }
    else {
        return res.json([])
    }
}