import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 0 auto;
  height: 65vh;
  padding: 30px 100px 15vh;
  text-align: center;
  background: linear-gradient(#A2F3CA, #87F4E1);
  clip-path: polygon(0 0, 100% 0,100% 50vh, 0 100%);
  display: flex;

  @media only screen and (max-width: 640px) {
    padding: 30px 15px 15vh;
  }
`;

export default Wrapper;