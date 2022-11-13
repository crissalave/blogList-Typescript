import { Schema, model } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required!']
    },
    author: {
        type: String,
        required: [true, 'author is required']
    },
    url: {
        type: String,
        required: [true, 'url is required']
    },
    likes: {
        type: Number,
        default: 0
    }
})

const Blog = model('Blog', blogSchema)

export default Blog