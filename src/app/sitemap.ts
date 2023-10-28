import Project from '@/models/project'
import dbConnect from '@/lib/dbConnect'
import hyphen from '@/lib/hyphen'

const URL = 'https://tabriziancodes.ir'

async function getAllPages() {
   await dbConnect()
   const projectData = await Project.find()

   return { projectData }
}

export default async function sitemap() {
   const { projectData } = await getAllPages()

   const projects = projectData.map(({ titleEn, slug, updatedAt }) => ({
      url: `${URL}/projects/${hyphen(slug)}?title=${titleEn}`,
      lastModified: updatedAt,
   }))

   const routes = [''].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
   }))

   return [...routes, ...projects]
}
