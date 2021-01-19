import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 48%;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.mx}px;
  border-radius: ${({ theme }) => theme.spacing.mx}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;
export const Title = styled.p`
  font-weight: bold;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;
export const DevicesNumber = styled.a`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  width: fit-content;
`;
