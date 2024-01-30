import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  max-width: 74rem;
  margin: 1.5rem auto;
  border-radius: 8px;
  flex-direction: column;
  height: calc(auto - 10rem);
  background: ${(props)=> props.theme["gray-800"]};
`;