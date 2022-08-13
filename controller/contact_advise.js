export default function contact_advise(req, res) {
    dbconnection.collection("contact").insertOne({
        name: req.body.name,
        address: req.body.address, 
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        time: new Date()
    })    
    .then(()=> res.json("success"))
    .catch(err=> console.log(err))
}