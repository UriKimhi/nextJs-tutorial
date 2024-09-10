"use client";
import Input from "@/components/Input";
import React, { useState, useEffect } from "react";
import { createTask, getAllTasks } from "../../utils/prismaHandlers";

const TasksPage = () => {
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = async () => {
    if (taskValue) {
      await createTask(taskValue);
      setTaskValue("");
      loadTasks();
    }
  };

  const loadTasks = async () => {
    console.log("in");
    const allTasks = await getAllTasks();
    console.log(allTasks);
    setTasks(allTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-row mb-10">
        <Input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
        <button className="btn btn-outline btn-info rounded-none" onClick={handleCreateTask}>
          create task
        </button>
      </div>
      {tasks?.map((task) => {
        return (
          <div className="bg-white shadow-md text-primary-content grid h-20 w-96 place-content-center rounded mb-3">
            {task.content}
          </div>
        );
      })}
    </div>
  );
};

export default TasksPage;
