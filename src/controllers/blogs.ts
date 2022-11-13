import express, { Request, Response } from 'express'
import Blog from '../models/blog'

// import IBlog from '../interfaces/IBlog'

const blogsRouter = express.Router()

blogsRouter.get('/', async (_req: Request, res: Response) => {
    await Blog
        .find({})
        .then((blogs): void => {
            res.status(200).json(blogs)
        })
})

blogsRouter.post('/', async (req: Request, res: Response) => {
    const newBlog = new Blog(req.body)

    await newBlog
        .save()
        .then((result): void => {
            res.status(201).json(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(401).json({'error': 'something goes wrong'})
        })
})

export default blogsRouter