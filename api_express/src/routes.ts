import { Express, NextFunction, Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "./controllers/tasks.controller";
import {
  createCategory,
  getCategories,
} from "./controllers/categories.controller";

function routes(app: Express) {
  app.get("/tasks", getTasks);
  app
    .route("/task")
    .get(getTask)
    .post(createTask)
    .put(updateTask)
    .delete(deleteTask);

  app.get("/categories", getCategories);
  app.route("/category").post(createCategory);
}
export default routes;
