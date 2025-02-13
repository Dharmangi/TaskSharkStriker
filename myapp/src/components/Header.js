import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaBell, FaCog, FaCaretDown } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background:rgb(31, 46, 62);
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StellarLogo = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 0.5rem;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.3rem 0.6rem; 
  font-size: 0.9rem; 
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.3rem; 
  font-size: 0.9rem; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1b2a38;
  color: #333;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.3rem 0.6rem; 
  font-size: 0.9rem; 
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #eee;
  }
`;

const Header = () => {
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const [isTenantOpen, setIsTenantOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <StellarLogo>STELLAR<br/>CYBER</StellarLogo>
      </LogoContainer>
      <Navigation>
        <NavItem href="#">DASHBOARD</NavItem>
        <NavItem href="#">COLLECT</NavItem>
        <NavItem href="#">DETECT</NavItem>
        <NavItem href="#">INVESTIGATE</NavItem>
        <NavItem href="#">RESPOND</NavItem>
        <NavItem href="#">CONFIGURE</NavItem>
        <NavItem href="#">ADMIN</NavItem>
      </Navigation>
      <UserActions>
        <DropdownContainer>
          <DropdownButton onClick={() => setIsMarketingOpen(!isMarketingOpen)}>
            Marketing1 <FaCaretDown />
          </DropdownButton>
          <DropdownContent isOpen={isMarketingOpen}>
            <DropdownItem href="#">Marketing 1</DropdownItem>
            <DropdownItem href="#">Marketing 2</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownButton onClick={() => setIsTenantOpen(!isTenantOpen)}>
            All Tenant <FaCaretDown />
          </DropdownButton>
          <DropdownContent isOpen={isTenantOpen}>
            <DropdownItem href="#">All Tenant</DropdownItem>
            <DropdownItem href="#">Tenant A</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
        <FaUser size={18} /> 
        <FaBell size={18} />
        <FaCog size={18} />
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;