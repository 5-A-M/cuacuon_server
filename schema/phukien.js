import mongoose from "mongoose"

const phukienSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    color: {
        type: String
    },
    keyIncluded: {
        type: String
    },
    material: {
        type: String
    },
    handCover: {
        type: String
    },
    lockBody: {
        type: String
    },
    lock: {
        type: String
    },
    photo: {
        type: String
    }
})
phukienSchema.index({name: 'text'})
export default mongoose.model("phukien", phukienSchema)