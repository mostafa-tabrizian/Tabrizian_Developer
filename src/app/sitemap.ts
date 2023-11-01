import Project from '@/models/project'
import dbConnect from '@/lib/dbConnect'
import hyphen from '@/lib/hyphen'

const URL = '#'

async function getAllPages() {
   await dbConnect()
   const projectData = await Project.find()

   return { projectData }
}

export default async function sitemap() {
   const { projectData } = await getAllPages()

   const projects = projectData.map(({ titleEn, updatedAt }) => ({
      url: `${URL}/projects/${hyphen(titleEn)}`,
      lastModified: updatedAt,
   }))

   const routes = [''].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
   }))

   return [...routes, ...projects]
}
