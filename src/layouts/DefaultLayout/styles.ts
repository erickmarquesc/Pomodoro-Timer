import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  padding: 3.5rem;
  max-width: 120rem;
  margin: 2.5rem auto;
  border-radius: 8px;
  flex-direction: column;
  height: auto;
  gap: 32px;
  background: ${(props)=> props.theme["gray-800"]};
`;