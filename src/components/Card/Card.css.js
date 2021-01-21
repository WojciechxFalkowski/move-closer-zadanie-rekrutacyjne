import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ theme }) => `calc(50% - ${theme.spacing.sm * 2}px)`};
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.mx}px;
  margin: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.spacing.mx}px;
  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme }) => `calc(${100 / 3}% - ${theme.spacing.sm * 2}px)`};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bigDesktop}px) {
    width: ${({ theme }) => `calc(25% - ${theme.spacing.mx * 2}px)`};
  }
`;
export const Title = styled.p`
  font-weight: bold;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;
export const DevicesNumber = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  width: fit-content;
`;
