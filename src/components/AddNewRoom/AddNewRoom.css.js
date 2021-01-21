import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
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
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  margin: ${({ theme }) =>
    `0  ${theme.spacing.mx + 4}px ${theme.spacing.xs}px ${
      theme.spacing.mx + 4
    }px`};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
`;
export const Button = styled.button`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.mx}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
  color: ${({ theme }) => theme.colors.white};
  text-transform: lowercase;
`;
