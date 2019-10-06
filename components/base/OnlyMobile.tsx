import React from 'react';
import styled from '../../styles/themed-components';

interface IProps {
  children: React.ReactNode;
}

const ResponsibleApp = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
& > div {
  position: relative;
  width: 299px;
  height: 626px;
  margin: 0 auto;
  background-color: black;
  border-radius: 0 0 1.5rem 1.5rem;
  
  &::before {
    content: "";
    position: absolute;
    background-image : url('https://user-images.githubusercontent.com/11402468/65429611-6d5c6600-de51-11e9-82a9-c2145463423a.png');
    width: 423px;
    height: 718px;
    top: -4rem;
    left: -2.1rem;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
}
${props => props.theme.media.phone`
  height: 85vh;
  & > div {
    width: 100%;
    height: 100%;
    position: static;
    margin: 0;
    &::before {
      content: none;
    }
  }
`}
`;

const OnlyMobile = (props: IProps) => {
  const { children } = props;
  return (
    <ResponsibleApp>
      <div>
        {children}
      </div>
    </ResponsibleApp>
  );
};

export default OnlyMobile;
