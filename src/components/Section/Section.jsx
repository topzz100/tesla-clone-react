import React from 'react';
import { ButtonGroup, ButtonLeft, ButtonRight, DownArrow, TextItem, Wrapper } from './Section.styles';

const Section = () => {
  return <>
    <Wrapper>
      <TextItem>
        <h1> Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextItem>
      <ButtonGroup>
        <ButtonLeft>
          custom order
        </ButtonLeft>
        <ButtonRight>
          existing inventory
        </ButtonRight>
        <DownArrow src='/images/down-arrow.svg'/>
      </ButtonGroup>

    </Wrapper>
  </>;
};

export default Section;
