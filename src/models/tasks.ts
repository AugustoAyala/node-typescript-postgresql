import { pool } from "../database";

export const fetchTasks = () => {
  return pool.query("SELECT * FROM tasks");
};

export const fetchTask = (value: number) => {
  return pool.query("SELECT * FROM tasks WHERE id = $1", [value]);
};

export const addTask = (value1: string, value2: string) => {
  return pool.query("INSERT INTO tasks (name, status) VALUES ($1, $2)", [
    value1,
    value2,
  ]);
};

export const removeTask = (value: number) => {
  return pool.query("DELETE FROM tasks WHERE id = $1", [value]);
};

export const updateTaskId = (value1, value2, value3) => {
  return pool.query("UPDATE tasks SET name = $1, status = $2 WHERE id = $3", [
    value1,
    value2,
    value3,
  ]);
};
