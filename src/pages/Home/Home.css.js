import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => theme.spacing.xl}px;
`;
