import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

type Props = {
  done?: boolean;
};

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export const List = styled(FlatList as new () => FlatList<Task>).attrs({
  ListHeaderComponentStyle: { marginBottom: 20 },
})`
  margin-horizontal: 24px;
  margin-top: 32px;
`;

export const TaskButton = styled.TouchableOpacity<Props>`
  padding: 12px 10px;
  margin: 10px 0;
  margin-bottom: 4px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.done ? props.theme.backgroundTask : 'transparent'};
`;

export const TaskMarker = styled.View<Props>`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  margin-right: 10px;
  ${({ done }) =>
    !done
      ? css`
          border-width: 1px;
          border-color: ${({ theme }) => theme.marker};
        `
      : css`
          background-color: ${({ theme }) => theme.marker};
        `}
`;

export const TaskText = styled.Text<Props>`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-family: Poppins-SemiBold;
  text-decoration-line: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export const HeaderText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.title,
}))`
  color: ${({ theme }) => theme.title};
  font-size: 24px;
  font-family: Poppins-SemiBold;
`;
