import styled from "styled-components";
export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
