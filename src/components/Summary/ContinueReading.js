import styled from 'styled-components';
import { Link } from 'gatsby';
import userConfig from '../../../config';

const ContinueReading = styled(Link)`
  color: #666d71;
  display: inline-block;
  font-size: 14px;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    color: ${userConfig.primaryColor};
  }  
`;

export default ContinueReading;