import { Request, Response } from "express";

import {
  createCategoryService,
  getAllCategoriesService,
} from "../services/categories.service";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await getAllCategoriesService();
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await createCategoryService(req.body);
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error + "" });
  }
};
