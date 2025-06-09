import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderBar>
      <LogoArea>
        <StyledLink to="/">
          TAYLOR SWIFT
        </StyledLink>
      </LogoArea>
      <MenuArea>
        <StyledLink to="/mypage">MY PAGE</StyledLink>
      </MenuArea>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 40px 16px 40px;
  border-bottom: 1px solid #e1e1e1;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
`;

const LogoArea = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const MenuArea = styled.nav`
  display: flex;
  gap: 28px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.15s;

  &:hover {
    color: #b37aff;
    text-decoration: underline;
  }
`;
