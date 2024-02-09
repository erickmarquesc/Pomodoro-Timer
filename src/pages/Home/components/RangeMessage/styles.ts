import styled from "styled-components"

export const ContentRangeMessage = styled.div`
  flex: 1;
  width: 100%;

  div{
    gap: 12px;
    padding: 1rem;
    display: flex;
    min-width: 600px;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    border-collapse: collapse;
    background-color: ${(porps) => porps.theme["gray-700"]};

    strong{
      display: flex;
    };
  };
`