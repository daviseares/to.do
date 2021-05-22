import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { Header, MyTasksList, TodoInput } from '../../components';
import { Wrapper } from './styles';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  const handleAddTask = (newTaskTitle: string) => {
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
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const handleEditTitle = (title: string) => {
    setTitle(title);
  };



  return (
    <Wrapper>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        title={title}
        tasks={tasks}
        onEditTitle={handleEditTitle}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </Wrapper>
  );
};

export default Home;
