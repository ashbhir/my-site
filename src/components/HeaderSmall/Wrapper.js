import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 0 auto;
  padding: 15px 100px;
  text-align: center;
  background: linear-gradient(#A2F3CA, #87F4E1);
  clip-path: polygon(0 0, 100% 0,100% 50vh, 0 100%);
  display: flex;

  @media only screen and (max-width: 640px) {
    padding: 10px 15px;
  }
`;

export default Wrapper;