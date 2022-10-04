import styled from "styled-components";

export const CountdownContainer = styled.div`
  gap: 1rem;
  display: flex;
  font-size: 10rem;
  line-height: 8rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme["gray-100"]};

  span{
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-700"]};
  };
`;

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  padding: 2rem 0;
  overflow: hidden;
  justify-content: center;
  color: ${(props) => props.theme["green-700"]};
`;