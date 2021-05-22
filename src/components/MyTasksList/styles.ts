import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

type Props = AppTheme & {
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
  padding-horizontal: 10px;
  padding-vertical: 12px;
  margin-vertical:10px;
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
  ${(props) =>
    !props.done
      ? css`
          border-width: 1px;
          border-color: ${(props) => props.theme.marker};
        `
      : css`
          background-color: ${(props) => props.theme.marker};
        `}
`;

export const TaskText = styled.Text<Props>`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-family: Poppins-SemiBold;
  text-decoration-line: ${(props) => (props.done ? 'line-through' : 'none')};
`;

export const HeaderText = styled.TextInput.attrs((props: Props) => ({
  placeholderTextColor: props.theme.title,
}))<Props>`
  color: ${(props) => props.theme.title};
  font-size: 24px;
  font-family: Poppins-SemiBold;
`;
