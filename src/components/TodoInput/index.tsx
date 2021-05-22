import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { Image } from 'react-native';
import { Wrapper, Input, AddButton } from './styles';
import checkIcon from '../../assets/icons/Check.png';

type TodoInputProps = {
  addTask: (task: string) => void;
};

const TodoInput = ({ addTask }: TodoInputProps) => {
  const [task, setTask] = useState('');

  const handleAddNewTask = () => {
    if (!isEmpty(task)) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        value={task}
      />
      <AddButton
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </AddButton>
    </Wrapper>
  );
};

export default TodoInput;
