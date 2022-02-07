import React from 'react';
import { Fade } from 'react-reveal';
import { Button, ButtonGroup, ButtonLeft, ButtonRight, DownArrow, FooterLinks, TextItem, Wrapper } from './Section.styles';

const Section = ({ show, title, description, image, buttonLeft, buttonRight, reveal}) => {
  return <>
    <Wrapper bgImage = {image}>
      <Fade bottom>
        <TextItem>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextItem>
      </Fade>
      
      <Fade bottom>
        <ButtonGroup>
          {
            buttonRight? 
            (
              <Button>
                <ButtonLeft>
                  {buttonLeft}
                </ButtonLeft>
                <ButtonRight>
                  {buttonRight}
                </ButtonRight>
              </Button>
            ):
            (
              <Button>
                <ButtonLeft>
                  {buttonLeft}
                </ButtonLeft>
              </Button>
            )
          }
         
          
         {show && <DownArrow src='/images/down-arrow.svg'/>} 
         
        </ButtonGroup>
      </Fade>
      {
      reveal && 
        <FooterLinks>
          <a href="#">Tesla &#169; 2022</a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Contact</a>
          <a href="#">Career</a> 
          <a href="#">News</a>
          <a href="#">Engage</a>
          <a href="#">Location</a>
        </FooterLinks>}

    </Wrapper>
  </>;
};

export default Section;
