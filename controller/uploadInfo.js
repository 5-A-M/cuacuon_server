import {dbconnection} from "../database/init.js"    

export const uploadInfo= (req, res)=> {
    if(parseInt(req.body.category) === 1) {

        dbconnection.collection("cua").insertOne({
            name: req.body.name,
            code: req.body.code, 
            codeColor: req.body.codeColor,
            openAir: req.body.openAir,
            steelForWings: req.body.steelForWings,
            steelForFrame: req.body.steelForFrame,
            steelMaterial: req.body.steelMaterial,
            surface: req.body.surface,
            thickWings: req.body.thickWings,
            glassDoor: req.body.glassDoor,
            width: req.body.width,
            height: req.body.height,
            lock: req.body.lock,
            hinge: req.body.hinge,
            price: req.body.price,
            photo: req.body.photo,
            time_created: new Date()
        })    
        .then(()=> res.json("success"))
        .catch(err=> console.log(err))
    }
    if(parseInt(req.body.category) === 2) {

        dbconnection.collection("cua_luxury").insertOne({
            name: req.body.name,
            code: req.body.code, 
            codeColor: req.body.codeColor,
            openAir: req.body.openAir,
            steelForWings: req.body.steelForWings,
            steelForFrame: req.body.steelForFrame,
            steelMaterial: req.body.steelMaterial,
            surface: req.body.surface,
            thickWings: req.body.thickWings,
            glassDoor: req.body.glassDoor,
            width: req.body.width,
            height: req.body.height,
            lock: req.body.lock,
            hinge: req.body.hinge,
            price: req.body.price,
            photo: req.body.photo,
            time_created: new Date()
        })    
        .then(()=> res.json("success"))
        .catch(err=> console.log(err))
    }
}