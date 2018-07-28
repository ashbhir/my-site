import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
 
injectGlobal`
  ${styledNormalize}
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: 'Open Sans', sans-serif; 
    line-height: 1.5;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }

  pre[class*="language-"] {
    background: #f5f2f0;
  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
  
  .social-link {
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    text-decoration: none;

    svg, img {
      display: inline-block;
      height: 20px;
      margin-right: 5px;
      stroke: #6e849c;
      vertical-align: middle;
      width: 20px;
    }

    &:hover {
      border-color: #3e465b;
    }
  }
`;