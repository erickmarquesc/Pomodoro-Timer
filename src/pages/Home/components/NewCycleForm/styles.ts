import styled from "styled-components"

export const FormContainer = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["gray-100"]};
`

const BaseInput = styled.input`
  border: 0;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: 2rem;
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
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  
  &::-webkit-calendar-picker-indicator{
    display: none !important;
  };
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 5rem;
  
`
