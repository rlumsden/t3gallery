import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  'https://utfs.io/f/a842593b-041b-488b-9cb2-a922f492dfb1-hda3am.png',
  'https://utfs.io/f/a973afca-8c7e-4504-8840-5930bbba5c0c-k7bgfj.png',
  'https://utfs.io/f/3156f91b-73cb-4f45-b47e-c24b7a785833-7khqg.png',
  'https://utfs.io/f/fd2c511d-89de-4875-bd64-e9c6f7c4bff8-y92i2c.png',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log("🚀 ~ HomePage ~ posts:", posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48 border border-gray-200 rounded-lg">
            <h1>{post.name}</h1>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id} ${index}`} className="w-48 border border-gray-200 rounded-lg">
            <img src={image.url}  />
          </div>
        ))}
      </div>
    </main>
  );
}
