import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => theme.spacing.mx}px;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
