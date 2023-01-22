import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        title: "Finance",
        emoji: "💰",
      },
      {
        title: "Wedding",
        emoji: "💞",
      },
      {
        title: "Freelance",
        emoji: "🖥️",
      },
      {
        title: "Shopping List",
        emoji: "🛒",
      },
    ],
  });

  const newTask = await prisma.task.createMany({
    data: [
      {
        label: "Upload 1099-R to TurboTax",
        categoryId: 1,
      },
      {
        label: "Print parking passes",
        categoryId: 2,
      },
      {
        label: "Sign contract, send back",
        categoryId: 3,
      },
      {
        label: "Hand sanitizer",
        categoryId: 4,
      },
    ],
  });

  console.log("Created new task: ", newTask);

  const allTasks = await prisma.task.findMany({
    include: { Category: true },
  });
  console.log("All tasks: ");
  console.dir(allTasks, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
