import { Express, NextFunction, Request, Response } from "express";
import {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  removeTaskService,
  updateTaskService,
} from "../services/tasks.service";
import { Task } from "@prisma/client";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tasks = await getAllTasksService();
  res.json(tasks);
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query;
    const tasks = await getTaskByIdService(Number(id));
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error + "" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = await createTaskService(req.body);
    res.json(newTask);
  } catch (error) {
    res.status(400).json({ error: error + "" });
  }
};

export const updateTask = async (req: Request<{}, {}, Task>, res: Response) => {
  try {
    const { id } = req.query;
    const tasks = await updateTaskService(Number(id), req.body);
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error + "" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const tasks = await removeTaskService(Number(id));
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error + "" });
  }
};
