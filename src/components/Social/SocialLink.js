import React from 'react';

const SocialLink = function({source}) {
  return (
    <a className='social-link' href={source.link}>
      <img src={source.imgSrc} alt={source.imgSrc} />
    </a>
  )
}

export default SocialLink;