import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })
  console.log("🚀 ~ HomePage ~ images:", images)

  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-3">
      <div className="flex flex-wrap gap-3 items-center justify-center container ">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id} ${index}`} className="p-1 w-48 border border-gray-200 rounded-lg">
            <Image className="rounded-md" src={image.url} alt="" width={300} height={300} />
          </div>
        ))}
      </div>
    </main>
  );
}
