import React from "react";
import Helmet from 'react-helmet';
import userConfig from '../../config';

import Card from '../components/Card';
import Container from '../components/Container';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';
import Header from "../components/Header";
import Divider from "../components/Divider";
 
const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Container>
      <Helmet title={`${userConfig.title} | ${userConfig.author}`} />
      <Header config={userConfig}/>
      {group
        .filter(({ node }) => !node.fields.slug.match('privacy-terms-captains-cricket'))
        .map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary 
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
            <Divider />
          </Card>
      ))}
      <Pagination 
        isFirst={index === 1}
        isLast={index === pageCount}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
    </Container>
  );
};
export default IndexPage;