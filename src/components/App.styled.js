import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const TextReportB = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;

  /* color: red; */
  /* color: rgb(64, 69, 72); */
  color: #fff;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const TextReportG = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;

  color: rgb(64, 69, 72);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;

  border: 1px solid #e4c3ad;
  border-radius: 4px;
  padding: 5px;
  background-color: #e4c3ad;
  background-color: transparent;
  transition: all 0.2s ease-in-out, background-color 0.2s ease-in-out;
  text-decoration: none;
  color: #e4c3ad;
  margin-top: 30px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eb9486;
    color: #ffffff;
    box-shadow: 0 0 15px #eb9486;
    border: 1px solid #eb9486;
  }

  &:active {
    scale: 0.9;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  border-bottom: 2px solid #fff;
`;
