import { Router } from "express";
const router = Router();
import {
  getTasks,
  getTaskId,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks";

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskId);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
