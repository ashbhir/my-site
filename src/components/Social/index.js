import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

// TODO: this has hard dependency on the existence of img, see how to fix
import twitterImg from './logo-twitter.svg';
import githubImg from './logo-github.svg';
import linkedinImg from './logo-linkedin.svg';
import mediumImg from './logo-medium.png';

function Social({ website, twitter, github, linkedin, medium }) {
  return (
    <Wrapper>
      {website && (
        <SocialLink source={website} />
      )}
      {twitter && (
        <SocialLink source={{...twitter, imgSrc: twitterImg}} />
      )}
      {github && (
        <SocialLink source={{...github, imgSrc: githubImg}} />
      )}
      {linkedin && (
        <SocialLink source={{...linkedin, imgSrc: linkedinImg}} />
      )}
      {medium && (
        <SocialLink source={{...medium, imgSrc: mediumImg}} />
      )}
    </Wrapper>
  );
}

export default Social;