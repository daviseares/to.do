import React from 'react';
import { View } from 'react-native';
import { HeaderText, TaskButton, TaskMarker, TaskText, List } from './styles';

type MyTasksListProps = {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  title: string;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  onEditTitle: (title: string) => void;
};

export const MyTasksList = ({
  tasks,
  title,
  onEditTitle,
  onLongPress,
  onPress,
}: MyTasksListProps) => (
  <List
    data={tasks}
    keyExtractor={(item) => String(item.id)}
    renderItem={({ item, index }) => {
      return (
        <TaskButton
          done={item.done}
          testID={`button-${index}`}
          activeOpacity={0.7}
          onPress={() => onPress(item.id)}
          onLongPress={() => onLongPress(item.id)}
        >
          <TaskMarker testID={`marker-${index}`} done={item.done} />
          <TaskText done={item.done}>{item.title}</TaskText>
        </TaskButton>
      );
    }}
    ListHeaderComponent={
      <View>
        <HeaderText
          value={title}
          onChangeText={onEditTitle}
          placeholder="Minhas Tasks"
        />
      </View>
    }
    style={{
      marginHorizontal: 24,
      marginTop: 32,
    }}
  />
);

export default MyTasksList;
