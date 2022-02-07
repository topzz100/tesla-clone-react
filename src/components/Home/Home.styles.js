import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  *{
    scroll-snap-align: start;
  }
`;