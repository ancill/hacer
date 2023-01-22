import { Category, PrismaClient, Task } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllTasksService = () => {
  return prisma.task.findMany({
    include: {
      Category: true,
    },
  });
};

export const getTaskByIdService = (id: number) => {
  return prisma.task.findFirst({
    where: {
      id: id,
    },
  });
};

export const updateTaskService = (id: number, task: Task) => {
  return prisma.task.update({
    where: {
      id: id,
    },
    data: {
      ...task,
    },
  });
};

export const createTaskService = (task: Task) => {
  return prisma.task.create({
    data: {
      label: task.label,
      categoryId: task.categoryId,
    },
  });
};

export const removeTaskService = (id: number) => {
  return prisma.task.delete({
    where: {
      id: id,
    },
  });
};
