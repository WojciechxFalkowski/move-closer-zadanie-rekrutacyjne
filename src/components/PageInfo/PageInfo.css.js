import styled from "styled-components";
export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;
export const ProfileWrapperInfo = styled.div``;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const H1 = styled.h1`
  font-size: 24px;
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;
export const Paragraph = styled.p`
  font-size: 14px;
`;
export const SettingsWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Button = styled.button`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
export const DropdownContent = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 150px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  right: 0;
  z-index: 100;
`;
export const MenuItem = styled.button`
  color: black;
  padding: ${({ theme }) => theme.spacing.sm}px;
  text-decoration: none;
  display: block;
  &:hover {
    opacity: 0.7;
  }
`;
export const InvisibleWrapper = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;
