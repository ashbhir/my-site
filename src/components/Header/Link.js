import styled from 'styled-components';
import { Link } from 'gatsby';
import userConfig from '../../../config';

const GatsbyLink = styled(Link)`
  color: ${userConfig.primaryColor};
  text-decoration: none;
`;

export default GatsbyLink;