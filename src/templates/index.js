import React from "react";
import Helmet from 'react-helmet';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Editable,
  EditableInput,
  EditablePreview
} from "@chakra-ui/react"

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
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <Button type="submit">Send</Button>
      </p>

    </form>
    </Container>
      
  );
};
export default IndexPage;