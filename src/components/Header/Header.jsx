import React from 'react';
// import { useSelector } from 'react-redux';
// import { SelectCars } from '../../features/car/carSlice';
import { CenterMenu, LogoImg, RightMenu, SideNav, Wrapper } from './Header.styles';



const Header = () => {
// const cars = useSelector(SelectCars)
  return <>
    <Wrapper>
      <LogoImg src='/images/logo.svg'/>
      <CenterMenu>
       <a href="#">Model S</a>
       <a href="#">Model 3</a>
       <a href="#">Model X</a>
       <a href="#">Model Y</a>
       <a href="#">Solar Roof</a>
       <a href="#">Solar Panels</a>
        
      </CenterMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>

      {/* <SideNav>
        <CloseIcon/>
        <span>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
        </span>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
          <a href="#">Existing Inventory</a>
          <a href="#">Trade-In</a>
          <a href="#">Text-Drive</a>
          <a href="#">Powerwall</a>
          <a href="#">Trade-In</a>
          <a href="#">Commercial Energy</a>
          <a href="#">Utilities</a>
      </SideNav> */}
    </Wrapper>
  </>;
};

export default Header;
