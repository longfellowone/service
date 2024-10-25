import prisma from "@/lib/prisma";
import { Suspense } from "react";

// Use this unless using dynamic APIs or suspense to force SSR (not static)
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions
// export const dynamic = "force-dynamic";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <div className="">
      <div>start</div>
      <Suspense fallback={<div>Loading...</div>}>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
        <div>end</div>
      </Suspense>
    </div>
  );
}
