import React from 'react';
import styled from '../../styles/themed-components';

interface IProps {
  children:React.ReactNode;
  img?: string;
}

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 400px;
  user-select: none;
  ${({ theme }) => theme.media.phone`
    width: 100vw;
    height: 133.3vw;
  `}
`;

const Overlay = (props: IProps) => {
  const { children } = props;
  return (
    <StyledOverlay>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
