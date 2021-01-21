import styled from "styled-components";
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.mx}px;
  min-height: 100px;
  margin: ${({ theme }) => theme.spacing.mx}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-basis: ${({ theme }) => `calc(50% - ${theme.spacing.mx * 2}px)`};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bigDesktop}px) {
    flex-basis: ${({ theme }) =>
      `calc(${100 / 3}% - ${theme.spacing.mx * 2}px)`};
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.mx}px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.orange};
`;
export const DataWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.p`
  padding-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-weight: bold;
  opacity: 0.8;
`;
export const Paragraph = styled.p`
  opacity: 0.5;
  font-size: 14px;
`;
