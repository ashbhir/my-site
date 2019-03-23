import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ sizes }) {
  return (
    <Wrapper>
      <Img fluid={sizes}/>
    </Wrapper>  
  );
}

export default FeaturedImage;