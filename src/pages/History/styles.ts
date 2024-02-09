import styled from "styled-components"

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  padding: 3.5rem;
  flex-direction: column;
`

export const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: 2.4rem;
    color: ${(props) => props.theme["gray-100"]};
  };

  button{
    border: 0;
    gap: 0.5rem;
    width: auto;
    height: 64px;
    padding: 1rem;
    display: flex;
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme["gray-100"]};
    background-color: ${(props) => props.theme["green-300"]};

    transition: 1s ease-in-out;

    &:hover{
      background: ${(props) => props.theme["red-700"]};
    };
  };
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table{
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th{
      padding: 1rem;
      text-align: left;
      line-height: 1.6;
      font-size: 1.8rem;
      color: ${(props)=> props.theme["gray-100"]};
      background-color: ${(props)=> props.theme["gray-600"]};

      &:first-child{
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      };

      &:last-child{
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      };
    };

    td{
      padding: 1rem;
      line-height: 1.6;
      font-size: 1.8rem;
      background-color: ${(porps)=> porps.theme["gray-700"]};
      border-top: 4px solid ${(props)=> props.theme["gray-800"]};

      &:first-child{
        width: 50%;
        padding-left: 1.5rem;
      };

      &:last-child{
        padding-right: 1.5rem;
      };
    };
  };

  .clearHistory{
    width: 100%;
    display: flex;
    margin-top: 32px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    strong{
      font-size: 1.6rem;
    };
  };
`

const STATUS_COLORS={
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface IStatusProps{
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<IStatusProps>`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  &::before{
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props)=> props.theme[STATUS_COLORS[props.statusColor]]};
  };
`