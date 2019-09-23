import styled, { withProps } from '../../styles/themed-components';
const StyledP = styled.p`
  ${props => props.theme.media.tablet`
    color: black;
    font-size: 5rem;
  `}
  color: ${props => props.theme.color.blue};
  font-size: 10rem;
	div {
		p {
		}
	}
`;

interface ISample {
  visible: string;
}

const SampleWithProps = withProps<ISample, HTMLSpanElement>(styled.span)`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

interface IProps {
  text?: string;
}

const Test = (props: IProps) => (
  <StyledP>
    <SampleWithProps visible={true}>🐶{props.text}🦄🐔</SampleWithProps>
    <SampleWithProps visible={false}>🐶{props.text}🦄🐔</SampleWithProps>
  </StyledP>
);

export default Test;
