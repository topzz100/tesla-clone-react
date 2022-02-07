import { Close } from '@mui/icons-material';
import  React, { useState} from 'react';
// import { useSelector } from 'react-redux';
// import { SelectCars } from '../../features/car/carSlice';
import { CenterMenu, CloseBtn, LogoImg, RightMenu, SideNav, Wrapper } from './Header.styles';
// import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
const [sideNav, setSideNav] = useState(false)
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
        <h4 href="#" className = 'menu' onClick = {() => {setSideNav(!sideNav)}}>Menu</h4>
      </RightMenu>

      <SideNav showNav = {sideNav}> 
        <CloseBtn>
          <Close onClick = {() => {setSideNav(!sideNav)}}/>
        </CloseBtn>
        
        
         <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
          <li>Existing Inventory</li>
          <li>Trade-In</li>
          <li>Text-Drive</li>
          <li>Powerwall</li>
          <li>Trade-In</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Existing Inventory</li>
        </ul>
      </SideNav> 
    </Wrapper>
  </>;
};

export default Header;
