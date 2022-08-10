import mongoose from "mongoose"

const cuaSchema = new mongoose.Schema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    codeColor: {
        type: String
    },
    openAir: {
        type: String
    },
    steelForWings: {
        type: String
    },
    steelForFrame: {
        type: String
    },
    steelMaterial: {
        type: String
    },
    surface: {
        type: String
    },
    thickWings: {
        type: String
    },
    glassDoor: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    lock: {
        type: String
    },
    hinge: {
        type: String
    },
    price: {
        type: String
    },
    photo: {
        type: String
    }
})
cuaSchema.index({name: 'text'})
export default mongoose.model("cua", cuaSchema)