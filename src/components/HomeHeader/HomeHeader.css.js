import styled from "styled-components";
export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  max-width: ${({ theme }) => theme.breakpoints.bigDesktop}px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-right: 16px;
    padding-left: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bigDesktop}px) {
    padding-right: unset;
    padding-left: unset;
  }
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
