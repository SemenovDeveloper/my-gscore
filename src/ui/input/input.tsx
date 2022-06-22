import styled from 'styled-components';
import { COLORS } from 'src/lib';

export  const Input = styled.input` 
  width: 100%;
  height: 68px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.lightestGray};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  margin: 24px 0;
  padding: 25px 23px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: ${COLORS.gray};
  }
`