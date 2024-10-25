import prisma from "@/lib/prisma";

export default async function Home() {
  const tasks = await prisma.task.findMany();

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
