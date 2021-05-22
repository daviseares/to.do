import styled from 'styled-components/native';

export const Wrapper = styled.View<AppTheme>`
  background: ${(props) => props.theme.background};
  flex: 1;
`;
