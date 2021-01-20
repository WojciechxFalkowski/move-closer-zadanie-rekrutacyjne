import styled from "styled-components";
export const Wrapper = styled.div``;
export const Range = styled.input`
overflow: hidden;
width:100%;
-webkit-appearance: none;
background-color: rgba(229,229,229,0.8);
  margin: ${({ theme }) => theme.spacing.mx}px 0;
  cursor: pointer;
  border-radius:5px;
  &::-webkit-slider-runnable-track {
    height: 16px;
    -webkit-appearance: none;
  }
  &::-webkit-slider-thumb {
    width: 14px;
    -webkit-appearance: none;
    height: 14px;
    border-radius:50%;
    cursor: ew-resize;
    transform:translateY(1px);
    background-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
