import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>Page Not found</h1>
      <Link to="/">Go home</Link>
    </Layout>
  );
}
