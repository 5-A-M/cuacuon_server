import { dbconnection } from "../database/init.js";

export const uploadPhukien = (req, res) => {
  dbconnection.collection("phukien").insertOne({
    name: req.body.name,
    type: req.body.type,
    color: req.body.color,
    keyIncluded: req.body.keyIncluded,
    material: req.body.material,
    handCover: req.body.handCover,
    lockBody: req.body.lockBody,
    lock: req.body.lock,
    photo: req.body.photo,
    price: req.body.price,
    time_created: new Date()
  })
  .then(()=> res.json("success"))
  .catch(err=> console.log(err))
};
