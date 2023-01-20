import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newTask = await prisma.task.create({
    data: {
     label: 'Make pizza',
     Category: {
        create: {
            title: 'Home',
            emoji: '🏠',
        }
     }
    },
  })
  console.log('Created new task: ', newTask)

  const allTasks = await prisma.task.findMany({
    include: { Category: true },
  })
  console.log('All tasks: ')
  console.dir(allTasks, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())