import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = {
  desktop: (...args) => undefined,
  tablet: (...args) => undefined,
  phone: (...args) => undefined,
};

Object.keys(sizes).reduce((acc, label: string) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
},                        media);

const color = {
  blue: '#2054ae',
  pink: '#c43683',
  black: '#24272a',
  grey4a: '#4a4a4a',
};

const theme = {
  color,
  media,
  puzzleSize: ( columns, rows) => css`
    width: 300px;
    height: ${300 / columns * rows}px;
    user-select: none;
    ${({ theme }) => theme.media.phone`
      width: 100vw;
      height: ${100 + 100 / columns}vw;
    `}
  `,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
