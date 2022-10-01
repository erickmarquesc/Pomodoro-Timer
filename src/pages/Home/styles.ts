import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form{
    gap: 3.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  };
`;

export const FormContainer = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.125rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["gray-100"]};
`;

const BaseInput = styled.input`
  border: 0;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: 1.125rem;
  background: transparent;
  color: ${(props) => props.theme["gray-100"]};
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};

  &:focus{
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  };

  &::placeholder{
    color: ${(props) => props.theme["gray-500"]};
  };
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

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

export const BaseCountdownButton = styled.button`
  border: 0;
  gap: 0.5rem;
  width: 100%;
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
  
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  };
  
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover{
    background: ${(props) => props.theme["green-700"]};
  };
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
 background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover{
    background: ${(props) => props.theme["red-700"]};
  };
`;