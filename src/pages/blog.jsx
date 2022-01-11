import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Learn tips and tricks buying good electronics for your use case and keep upto date with latest news about TechStack.LK"
      />
      <main>
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          Blog
        </h1>
        <BlogCard />
        <BlogCard />
      </main>
    </Layout>
  );
}
