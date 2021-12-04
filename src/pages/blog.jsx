import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <main className="mx-5 mb-40 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          Blog
        </h1>
        <BlogCard />
        <BlogCard />
      </main>
    </Layout>
  );
}
