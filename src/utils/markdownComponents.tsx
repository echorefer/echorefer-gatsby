import React from 'react';
import { Typography, Link, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { Link as GatsbyLink } from 'gatsby';

import type { Components } from 'react-markdown';

const BlockQuote = styled('blockquote')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  margin: theme.spacing(0, 2, 2),
  borderLeft: `3px solid #a3bffa`,
  fontStyle: 'italic',
  color: '#718096',
}));

const OrderedList = styled('ol')(({ theme }) => ({
  fontSize: '1.25rem',
  color: '#4a5568',
  marginTop: 0,
  marginBottom: theme.spacing(4),
}));

const UnorderedList = styled('ul')(({ theme }) => ({
  fontSize: '1.25rem',
  color: '#4a5568',
  marginTop: 0,
  marginBottom: theme.spacing(4),
}));

const ListItem = styled('li')(({ theme }) => ({
  fontSize: '1.25rem',
  color: '#4a5568',
  marginTop: 0,
  marginBottom: theme.spacing(1),
  lineHeight: 1.8,
}));

const Code = styled('code')(({ theme }) => ({
  borderRadius: '0.3em',
  color: 'rgb(74, 85, 104)',
  backgroundColor: '#edf2f7',
  padding: theme.spacing(0.5, 1),
  fontFamily: 'monospace',
  fontSize: '1.25rem',
}));

const components: Partial<Components> = {
  h1(props) {
    return (
      <Typography
        component="h1"
        sx={{
          fontSize: '3rem',
          fontWeight: 900,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  h2(props) {
    return (
      <Typography
        component="h2"
        sx={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  h3(props) {
    return (
      <Typography
        component="h3"
        sx={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  h4(props) {
    return (
      <Typography
        component="h4"
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  h5(props) {
    return (
      <Typography
        component="h4"
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  h6(props) {
    return (
      <Typography
        component="h4"
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#2d3748',
          mb: 2,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  blockquote(props) {
    return <BlockQuote>{props.children}</BlockQuote>;
  },
  p(props) {
    return (
      <Typography
        paragraph
        sx={{
          fontSize: '1.25rem',
          fontWeight: 400,
          color: '#4a5568',
          mb: 4,
          lineHeight: 1.8,
        }}
      >
        {props.children}
      </Typography>
    );
  },
  li(props) {
    return <ListItem>{props.children}</ListItem>;
  },
  ol(props) {
    return <OrderedList>{props.children}</OrderedList>;
  },
  ul(props) {
    return <UnorderedList>{props.children}</UnorderedList>;
  },
  hr() {
    return (
      <Divider
        sx={{
          my: 4,
          borderWidth: 1,
        }}
      />
    );
  },
  a(props) {
    return (
      <Link component={GatsbyLink} to={props.href || ''}>
        {props.children}
      </Link>
    );
  },
  img() {
    return null;
  },
  code(props) {
    return <Code>{props.children}</Code>;
  },
};

export default components;
