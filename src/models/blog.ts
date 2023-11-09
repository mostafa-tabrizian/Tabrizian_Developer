import mongoose from 'mongoose'

export interface IBlog {
    _id: string
    active: boolean
    lang: string
    title: string
    slug: string
    thumbnail: string
    nLikes: number
    comments: [
        {
            username: string
            body: string
            createdAt: Date
        }
    ]
    authorId: string
    text: string
    createdAt: Date
    updatedAt: Date
}

const blogSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: true
    },
    lang: String,
    title: String,
    slug: String,
    thumbnail: String,
    nLikes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            username: String,
            body: String,
            createdAt: Date
        },
    ],
    authorId: String,
    text: String
})

blogSchema.set('timestamps', true)

blogSchema.index({ slug: 'text' }, { unique: true })

export default mongoose.models.blog || mongoose.model('blog', blogSchema)