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
  @media(max-width: 800px){
    padding: 0 20px;
  }
  
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
@media(max-width: 1050px){
  a{
    display: none
  }
  .menu{
    background-color: rgba(41, 40, 40, 0.1);
    border-radius: 9px;
  }
    
  }
  a, h4{
    font-size: .85rem;
    padding: 6px 12px ;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    transition: .3s linear;
    cursor: pointer;
    :hover{
      background-color: rgba(41, 40, 40, 0.1);
      border-radius: 9px;
    }
  }
  
`;
export const RightMenu= styled(CenterMenu)`
  @media(max-width: 1000px){
    a{
      display: none;
    }
  }
`;
export const SideNav= styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transform : ${props => props.showNav? 'translateX(0)' : 'translateX(100%)'};
  transition: .3s linear;

  
  /* padding: 0 20px; */
  ul{
    height: 100%;
    width: 100%;
    padding: 0 20px;
    overflow-y: scroll;
  
  ::-webkit-scrollbar{
    width: 5px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
  background: #f1f1f1;
}
  ::-webkit-scrollbar-thumb {
  background: #888;
}
      li{
    list-style: none;
    font-size: .85rem;
    padding: 10px 10px;
    overflow: hidden;
  } 
  }
 
 

  `;
  export const CloseBtn = styled.div`
    padding: 15px 25px 15px 20px;
    text-align: right;
    overflow: hidden;
  `;
