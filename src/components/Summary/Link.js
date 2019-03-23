import styled from 'styled-components';
import { Link } from 'gatsby';
import userConfig from '../../../config';

const GatsbyLink = styled(Link)`
  color: #3e465b;
  text-decoration: none;

  &:hover {
    color: ${userConfig.primaryColor};
  }
`;

export default GatsbyLink;