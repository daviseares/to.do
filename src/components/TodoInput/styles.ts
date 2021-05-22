import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

type Props = AppTheme;

export const Wrapper = styled.View<Props>`
  background-color: ${(props) => props.theme.input};
  border-radius: 5px;
  margin-top: -25px;
  margin-horizontal: 40px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  elevation: 5;

  ${Platform.OS === 'ios' &&
  css`
    shadow-color: ${(props) => props.theme.shadow};
    shadow-offset: 0 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
  `}
`;

export const Input = styled.TextInput.attrs((props: Props) => ({
  placeholderTextColor: props.theme.text,
}))<Props>`
  flex: 1;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  padding-left: 12px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const AddButton = styled.TouchableOpacity<Props>`
  background-color: ${(props) => props.theme.button};
  height: 50px;
  padding-horizontal: 16px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
