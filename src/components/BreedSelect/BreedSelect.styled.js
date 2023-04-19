import styled from 'styled-components';
// import { Select as SelectNew } from 'react-select';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  margin: 0 auto;
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Select = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;
