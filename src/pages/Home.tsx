import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTaskTitle: string) => {
    //TODO - add new task if it's not empty
    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldTasks) => [...oldTasks, task]);
  };

  const handleMarkTaskAsDone = (id: number) => {
    const newTasks = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item,
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter((item)=> item.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
};
