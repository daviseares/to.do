import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Header, MyTasksList, TodoInput } from '../../components';
import { useStores } from '../../hooks';
import { Wrapper } from './styles';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

const Home = () => {
  const { tasks } = useStores();
  const [title, setTitle] = useState('');

  const handleAddTask = (newTaskTitle: string) => {
    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    tasks.setTask(task);
  };

  const handleMarkTaskAsDone = (id: number) => {
    tasks.markAsDone(id);
  };

  const handleRemoveTask = (id: number) => {
    tasks.remove(id);
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
        tasks={tasks.tasks}
        onEditTitle={handleEditTitle}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </Wrapper>
  );
};

export default observer(Home);
