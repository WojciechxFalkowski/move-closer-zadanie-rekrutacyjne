import styled from "styled-components";
export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => `${theme.spacing.xl}px ${theme.spacing.mx}px`};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.xl}px;
  border-bottom-right-radius: ${({ theme }) => theme.spacing.xl}px; ;
`;
export const Button = styled.button`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
export const MeasurementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;
