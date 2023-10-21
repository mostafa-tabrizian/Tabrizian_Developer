import Category from '@/models/category'
import dbConnect from '@/lib/dbConnect'
import hyphen from '@/lib/hyphen'

const URL = 'https://tabriziancodes.ir'

async function getAllPages() {
   await dbConnect()
   const categoriesData = await Category.find()

   return { categoriesData }
}

export default async function sitemap() {
   const { categoriesData } = await getAllPages()

   const categories = categoriesData.map(({ name, slug, updatedAt }) => ({
      url: `${URL}/category/${hyphen(slug)}?name=${name}`,
      lastModified: updatedAt,
   }))

   const routes = [''].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
   }))

   return [...routes, ...categories]
}
