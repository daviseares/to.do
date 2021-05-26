import 'styled-components';

declare type AppTheme = {
  appBar: string;
  button: string;
  title: string;
  backgroundTask: string;
  input: string;
  shadow: string;
  marker: string;
  text: string;
  background: string;
};

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
