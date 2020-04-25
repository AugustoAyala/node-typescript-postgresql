import { Request, Response } from "express";
import {
  fetchTasks,
  fetchTask,
  addTask,
  removeTask,
  updateTaskId,
} from "../models/tasks";
import { QueryResult } from "pg";

export const getTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasks: QueryResult = await fetchTasks();
    return res.status(200).json(tasks.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};

export const getTaskId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const task: QueryResult = await fetchTask(parseInt(req.params.id));
    return res.status(200).json(task.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, status } = req.body;
    const response: QueryResult = await addTask(name, status);
    console.log(response);
    return res.json({
      message: "Task add Successfully",
      task: req.body,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await removeTask(parseInt(req.params.id));
    console.log(response);
    return res.status(200).json("Task remove Successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, status } = req.body;
    const response: QueryResult = await updateTaskId(
      name,
      status,
      parseInt(req.params.id)
    );
    console.log(response);
    return res.json({
      message: "Task Updated Successfully",
      task: req.body,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};
