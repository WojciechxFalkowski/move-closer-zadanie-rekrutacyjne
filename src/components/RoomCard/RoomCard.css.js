import styled from "styled-components";
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.mx}px;
  min-height: 100px;
  margin: ${({ theme }) => theme.spacing.mx}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
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
