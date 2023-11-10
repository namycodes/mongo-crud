import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title:{
        type:String,
        required: [true,'This is a required Field'],
        minLength: [4,'Characters Must be 4 and Above']
    },
    section:{
        type: String,
        required:[true,'This is a required Field']
    },
    body:{
        type: String,
        required: [true,'This is a Requred field'],
        minLength:[10,'Body Should be 10 Characters Long']
    }
},{timestamps: true})

const BlogModel = mongoose.models.blog || mongoose.model('blog',BlogSchema)
export default BlogModel