import React from 'react';
import PropTypes from "prop-types";
import 'prismjs/themes/prism.css';
import GlobalStyles from '../../global-styles';
import userConfig from '../../../config';

import Header from '../Header';

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <GlobalStyles />
        <Header config={userConfig}/>
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Layout