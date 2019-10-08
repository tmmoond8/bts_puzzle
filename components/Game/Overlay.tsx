import React from 'react';
import styled, { withProps } from '../../styles/themed-components';

interface IProps {
  children:React.ReactNode;
  img?: string;
  columns: number;
  rows: number;
}

const StyledOverlay = withProps<any, HTMLDivElement>(styled.div)`
  position: absolute;
  left: 0;
  top: 0;
  ${({ theme, rows, columns }) => theme.puzzleSize(columns, rows)};
  z-index: 100;
`;

const Overlay = (props: IProps) => {
  const { children, columns, rows } = props;
  return (
    <StyledOverlay columns={columns} rows={rows}>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
