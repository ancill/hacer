import { Category, PrismaClient, Task } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCategoriesService = () => {
  return prisma.category.findMany();
};

export const getCategoryService = (id: number) => {
  return prisma.category.findFirst({
    where: {
      id: id,
    },
  });
};

export const createCategoryService = (category: Category) => {
  return prisma.category.create({
    data: {
      title: category.title,
      emoji: category.emoji,
    },
  });
};
