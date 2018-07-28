import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
  padding: 75px 100px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export default Card;