import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => theme.spacing.mx}px;
`;
export const CardsWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.breakpoints.bigDesktop}px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.spacing.mx}px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: flex-start;
  }
`;
