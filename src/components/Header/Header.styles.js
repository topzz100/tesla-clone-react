import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 99;
  
`
export const LogoImg = styled.img`
  width: 110px;
  height: 15px;
  
`;
export const CenterMenu= styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
  a{
    font-size: .85rem;
    padding: 6px 12px ;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    transition: .3s linear;
    :hover{
      background-color: rgba(41, 40, 40, 0.1);
      border-radius: 9px
    }
  }
  
`;
export const RightMenu= styled(CenterMenu)`

`;
export const SideNav= styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  Z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  a{
    text-decoration: none;
    color: inherit;
    font-size: .85rem;
    padding: 10px 10px;
  }
  span{
    display: flex;
    flex-direction: column
  }

  `;
