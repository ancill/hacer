import { Category, PrismaClient, Task } from "@prisma/client";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import { createLogMiddleware, nameInjectionMiddleware } from "./middleware";

const app = express();

app.use(express.json());
app.use(createLogMiddleware);
app.use(nameInjectionMiddleware({ name: "DONE!✅" }));

routes(app);

// // Fetch task by id
// app.get("/task/:taskId", async (req: Request<{ taskId: string }>, res) => {
//   const { taskId } = req.params;
//   console.log(taskId);
//   const task = await prisma.task.findFirst({
//     where: { id: Number(taskId) },
//   });
//   res.json(task);
// });

// // Fetch all Tasks
// app.get("/tasks", async (req, res) => {
//   const tasks = await prisma.task.findMany();
//   res.json(tasks);
// });

// // Fetch all done/undone Tasks
// app.get(
//   "/tasks/:done",
//   async (
//     req: Request<{ done: string }, {}, { name: string }, {}>,
//     res: Response,
//     next: NextFunction
//   ) => {
//     const { done } = req.params;
//     console.log(res.locals.name);
//     const tasks = await prisma.task.findMany({
//       where: { isDone: !done },
//     });
//     res.json(tasks);
//   }
// );

// const throwError = async () => {
//   throw new Error("Boom");
// };

// app.get("/error", async (req, res) => {
//   try {
//     await throwError();
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error + "" });
//   }
// });

// // Create new Task
// app.post(`/task`, async (req: Request<Task>, res) => {
//   const { label } = req.body as Task;
//   const result = await prisma.task.create({
//     data: {
//       label,
//       Category: {
//         create: {
//           title: "Home",
//           emoji: "🏠",
//         },
//       },
//     },
//   });
//   res.json(result);
// });

// app.post(`/category`, async (req: Request<Category>, res) => {
//   const result = await prisma.task.create({
//     data: { ...req.body },
//   });
//   res.json(result);
// });

// app.get(`/task/:id`, async (req, res) => {
//   const { id } = req.params;
//   const task = await prisma.task.findUnique({
//     where: { id: Number(id) },
//   });
//   res.json(task);
// });

// app.post(`/task`, async (req, res) => {
//   const { title, content, authorEmail } = req.body;
//   const result = await prisma.post.create({
//     data: {
//       title,
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//     },
//   });
//   res.json(result);
// });

// app.put("/post/publish/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.update({
//     where: { id: Number(id) },
//     data: { published: true },
//   });
//   res.json(post);
// });

// app.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.delete({
//     where: { id: Number(id) },
//   });
//   res.json(post);
// });

app.listen(3001, () =>
  console.log("REST API server ready at: http://localhost:3001")
);
