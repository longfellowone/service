import prisma from "@/lib/prisma";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <div className="">
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
}
