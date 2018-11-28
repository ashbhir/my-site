import React, { Component } from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import P from './P';
import H1 from './H1';
import Link from './Link';
import Wrapper from './Wrapper';
import MenuIcon from './MenuIcon';
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
    const showMenuIcon = false;
    return (
      <Container>
        <Wrapper>
         { showMenuIcon && <MenuIcon menuShown={this.state.menuShown} onClick={this.toggleMenu}/> }
          <HeaderInfo>
            {userConfig.showHeaderImage && (
              <HeaderImage/>
            )}
            <H1><Link to="/">{author}</Link></H1>
            <P>{tagline}</P>
            {social &&
              <Social
                github={social.github}
                twitter={social.twitter}
                linkedin={social.linkedin}
                medium={social.medium}
              />
            }
          </HeaderInfo>
        </Wrapper>
      </Container> 
    );
  }
  
}

export default Header;