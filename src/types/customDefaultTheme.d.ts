import themes from '../themes';
import 'styled-components';
import { DefaultTheme } from 'styled-components/native';

type ThemeType = typeof themes.light;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}