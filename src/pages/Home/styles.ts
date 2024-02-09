import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: row;

  form{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  };
`

export const FormContent = styled.div`
  gap: 32px;
  width: 700px;
  height: 460px;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ChallengeContainer = styled.div`
  gap: 24px;
  width: 400px;
  display: flex;
  height: 460px;
  border-radius: 8px;
  padding: 2rem 1rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme["gray-700"]};

  img{
    height: 130px;
  };

  section{
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: solid 1px ;

    h1{
      font-size: 2rem;
    };
  };

  h2{
    flex: 1;
    font-size: 18px;
    text-transform: uppercase;
  };
  
  strong{
    width: 350px;
    height: 100%;
    font-size: 18px;
    font-weight: 300;
  };
`

export const BaseCountdownButton = styled.button`
  border: 0;
  gap: 0.5rem;
  width: 100%;
  height: 64px;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  margin-top: auto;
  font-size: 1.8rem;
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
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover{
    background: ${(props) => props.theme["green-700"]};
  };
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover{
    background: ${(props) => props.theme["red-700"]};
  };
`