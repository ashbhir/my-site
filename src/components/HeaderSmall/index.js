import React, { Component } from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import Title from './Title';
import Link from './Link';
import Wrapper from './Wrapper';
import HeaderInfo from './HeaderInfo';


class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuShown: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const menuShown = this.state.menuShown;
    this.setState({menuShown: !menuShown});
  }

  render() {
    const { author, tagline, social } = this.props.config;
    return (
      <Wrapper>
        <HeaderInfo>
          <Title><Link to="/">{author}</Link></Title>
        </HeaderInfo>
      </Wrapper>
    );
  }
  
}

export default Header;