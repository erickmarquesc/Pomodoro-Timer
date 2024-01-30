import styled from "styled-components";

export const ContentRangeMessage = styled.div`
  flex: 1;
  overflow: auto;
  width: 100%;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    background-color: ${(porps) => porps.theme["gray-700"]};
    padding: 1rem;
    font-size: 0.875rem;
    gap: 12px;

    strong{
      display: flex;
    }
  }
`