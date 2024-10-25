import prisma from "@/lib/prisma";

// Use this unless using suspense to force SSR (not static)
export const dynamic = "force-dynamic";

export default async function Home() {
  const tasks = await prisma.task.findMany();

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
