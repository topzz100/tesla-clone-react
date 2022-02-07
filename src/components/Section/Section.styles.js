import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-image: url('/images/model-s.jpg');  */
  overflow: hidden;
  height: 100vh;
  width:100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  position: relative;
  `;
export const TextItem = styled.div`
  text-align: center;
  margin-top: 90px;

`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 70px;
  /* justify-content: center; */
`;
export const Button = styled.div`
  display: flex;
  @media(max-width: 768px){
    flex-direction: column
  }
`;
export const ButtonLeft = styled.button`
  background-color: black;
  margin: 10px;
  width: 230px;
  height: 35px;
  color: white;
  display: flex;
  /* align-items: center */
  /* justify-content: center; */
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: .8rem;
  cursor: pointer;
  opacity: 0.65;
`;

export const ButtonRight = styled(ButtonLeft)`
  color: black;
  background-color: white;
  
`;
export const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: animateDown infinite 1s;
  cursor: pointer;
`;
export const FooterLinks = styled.div`
position: absolute;
bottom: 10px;
left: 0;
right: 0;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center
width: 100%;
@media(max-width: 768px){
  /* flex-direction: column; */
  flex-wrap: wrap;
  padding: 0 15px; 
}
a
{
  text-decoration: none;
  color: inherit;
  font-size: .7rem;
  margin: 2px 5px;
}
`;

