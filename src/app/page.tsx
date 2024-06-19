import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import "@uploadthing/react/styles.css";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="container flex flex-wrap items-center justify-center gap-3 ">
      {images.map((image) => (
        <div
          key={`${image.id}`}
          className="w-48 rounded-lg border border-gray-200 p-1"
        >
          <Image
            className="rounded-md"
            src={image.url}
            alt=""
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-3">
      <SignedOut>
        <p>Please sign in to view this page</p>
      </SignedOut>
      <SignedIn>        
        <Images />
      </SignedIn>
    </main>
  );
}
