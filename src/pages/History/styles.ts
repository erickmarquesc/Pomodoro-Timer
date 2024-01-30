import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  padding: 3.5rem;
  flex-direction: column;

  
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  button{
    border: 0;
    gap: 0.5rem;
    width: auto;
    height: 64px;
    padding: 1rem;
    display: flex;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    color: ${(props) => props.theme["gray-100"]};
    background-color: ${(props) => props.theme["green-300"]};
    text-transform: uppercase;

    transition: 1s ease-in-out;

    &:hover{
      background: ${(props) => props.theme["red-700"]};
    };
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table{
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th{
      background-color: ${(props)=> props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props)=> props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child{
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child{
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
      
    }

    td{
      background-color: ${(porps)=> porps.theme["gray-700"]};
      border-top: 4px solid ${(props)=> props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child{
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child{
        padding-right: 1.5rem;
      }
    }
  }

    .clearHistory{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 32px;
      align-items: center;
      justify-content: center;
    }
`;

const STATUS_COLORS={
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface IStatusProps{
  statusColor: keyof typeof STATUS_COLORS;
};

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
  }
`;