import styled from "styled-components"
interface ICountdownContainerProps {
  isTimeInCountdown: boolean
}

export const CountdownContainer = styled.div<ICountdownContainerProps>`
  gap: 1rem;
  display: flex;
  font-size: 15rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme["gray-100"]};
  justify-content: center;
  width: 100%;
  height: 100%;
  
  .timeInCountdown{
    color: ${(props) => props.theme[props.isTimeInCountdown ? "red-500" : "gray-100"]};
  };
  
  span{
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-700"]};
  };
`

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  padding: 2rem 0;
  overflow: hidden;
  justify-content: center;
  color: ${(props) => props.theme["green-700"]};
`;