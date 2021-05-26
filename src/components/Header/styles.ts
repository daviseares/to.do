import { StatusBar, SafeAreaView as _SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const getStatusBar = () =>
  StatusBar.currentHeight ? StatusBar.currentHeight : 0;

type Props = {
  bold?: boolean;
};

export const Wrapper = styled.View<Props>`
  padding-top: ${getStatusBar()}px;
  padding-bottom: 44px;
  background-color: ${({ theme }) => theme.appBar};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text<Props>`
  font-size: 24px;
  color: #fff;
  font-family: 'Poppins-Regular';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const SafeAreaView = styled(_SafeAreaView)`
  background-color: ${({ theme }) => theme.appBar};
`;
