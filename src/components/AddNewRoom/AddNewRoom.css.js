import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const StyledField = styled(Field)`
  margin: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.mx}px`};
  padding: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  margin: 0 ${({ theme }) => theme.spacing.mx}px;
`;
