import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })
  console.log("🚀 ~ HomePage ~ images:", images)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id} ${index}`} className="w-48 border border-gray-200 rounded-lg">
            <img src={image.url}  />
          </div>
        ))}
      </div>
    </main>
  );
}
