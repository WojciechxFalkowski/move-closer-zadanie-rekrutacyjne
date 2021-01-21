import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
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
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  margin: ${({ theme }) =>
    `0  ${theme.spacing.mx + 4}px ${theme.spacing.xs}px ${
      theme.spacing.mx + 4
    }px`};
  color: ${({ theme }) => theme.colors.orange};
  opacity: 0.7;
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
