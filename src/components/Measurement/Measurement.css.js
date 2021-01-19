import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;
export const Span = styled.span`
  width: 45px;
  height: 45px;
  font-size: 30px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  text-align: center;
`;
export const ValueWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;
export const ValueParagraph = styled.p`
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.spacing.xs}px;
`;
export const TextParagraph = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`;
