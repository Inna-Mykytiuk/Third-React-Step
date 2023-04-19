import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 40%; */

  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  margin: 0 auto;
  background-color: rgb(255 255 255 / 45%);

  h1 {
    margin: 0;
    margin-bottom: 20px;

    font-size: 30px;
    font-weight: 700;
    font-style: italic;

    color: rgb(64 69 72);

    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 15px;
    input {
      width: 100%;

      padding: 10px;
      border: none;
      border-radius: 5px;
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
      &:focus-within {
        /* border-bottom: 1px solid #9eb7e5; */
        box-shadow: 0 3px 15px rgb(43, 46, 48);
        border-radius: 5px;
      }
    }
  }
`;

export const SearchBtn = styled.button`
  padding: 10px 20px;
  /* background-color: rgb(33, 150, 243); */
  background-color: rgb(43 46 48);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;
  font-size: 16px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  /* font-family: 'Raleway-Regular', sans-serif; */

  &:hover,
  &:focus {
    /* filter: brightness(95%); */
    opacity: 1;
    color: #fff;
  }

  &:active {
    scale: 0.95;
  }
`;
