import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
  padding: 25px 100px;

  @media only screen and (max-width: 640px) {
    border-left: none;
    border-right: none;
    padding: 15px 15px;
  }
`;

export default Card;