"use server";
import prisma from "@/utils/db";

// Create a new task
export const createTask = async (taskValue) => {
  if (taskValue) {
    await prisma.task.create({
      data: {
        content: taskValue,
      },
    });
  }
};

// Fetch all tasks from the database
export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
};
