import prisma from '@/lib/prisma'

// Need to run canary version to use this, enable in config
// https://nextjs.org/docs/app/api-reference/next-config-js/ppr
// export const experimental_ppr = true

// Use this if not using dynamic APIs to force SSR (not static)
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching†
export const dynamic = 'force-dynamic'

// Fetch data in parallel by retrieving data outside of component
// Wrap function in cache() if using in more than one location
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions
async function fetchTasks() {
  return prisma.task.findMany()
}

export default async function Home() {
  const tasks = await fetchTasks()

  return (
    <div className="">
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  )
}
