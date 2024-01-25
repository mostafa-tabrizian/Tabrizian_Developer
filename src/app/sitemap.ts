import Project from '@/models/project'
import Blog from '@/models/blog'
import dbConnect from '@/lib/dbConnect'

const URL = 'https://mostafatabrizian.ir'

async function getAllPages() {
   await dbConnect()
   const projectData = await Project.find().lean()
   const blogData = await Blog.find().lean()

   return { projectData, blogData }
}

export default async function sitemap() {
   const { projectData, blogData } = await getAllPages()

   const projects = projectData.map(({ _id, updatedAt }) => ({
      url: `${URL}/fa/projects/${_id}`,
      lastModified: updatedAt,
   }))

   const blogs = blogData.map(({ slug, lang, modifiedAt }) => ({
      url: `${URL}/${lang}/blog/${slug}`,
      lastModified: modifiedAt,
   }))

   const routes = [''].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
   }))

   return [...routes, ...projects, ...blogs]
}
