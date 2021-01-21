import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.orange};
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const StyledField = styled(Field)`
  margin: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.mx}px`};
  padding: ${({ theme }) => theme.spacing.sm}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;
export const StyledFieldCheckbox = styled(StyledField).attrs({
  type: "checkbox",
})`
  margin: unset;
  &:before {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    background-color: ${({ isactivecheck, theme }) =>
      isactivecheck === "true" ? `${theme.colors.orange}` : "white"};
    border-radius: 4px;
    cursor: pointer;
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  margin: ${({ theme }) =>
    `0  ${theme.spacing.mx + 4}px ${theme.spacing.xs}px ${
      theme.spacing.mx + 4
    }px`};
  color: ${({ theme }) => theme.colors.orange};
  opacity: 0.9;
`;
export const Button = styled.button`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.mx}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
  color: ${({ theme }) => theme.colors.orange};
  text-transform: lowercase;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.mx + 4}px`};
`;
