import prisma from "@/lib/prisma";

// Use this if not using dynamic APIs to force SSR (not static)
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching†
export const dynamic = "force-dynamic";

// Fetch data in parallel by retrieving data outside of component
async function getTasks() {
  return prisma.task.findMany();
}

export default async function Home() {
  const tasks = await getTasks();

  console.log(tasks);

  return (
    <div className="">
      <div>start</div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
      <div>end</div>
    </div>
  );
}
