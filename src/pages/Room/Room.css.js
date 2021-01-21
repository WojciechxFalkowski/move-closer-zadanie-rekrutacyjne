import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  padding-bottom: ${({ theme }) => theme.spacing.mx}px;
`;
export const CardsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
