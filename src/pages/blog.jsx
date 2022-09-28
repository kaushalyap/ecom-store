import BlogCard from '../components/BlogCard';
import Layout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <Layout>
      <main>
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          Blog
        </h1>
        <BlogCard
          slug={undefined}
          heroImage={undefined}
          altText={undefined}
          title={undefined}
          author={undefined}
          date={undefined}
        />
        <BlogCard
          slug={undefined}
          heroImage={undefined}
          altText={undefined}
          title={undefined}
          author={undefined}
          date={undefined}
        />
      </main>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Blog"
    description="Learn tips and tricks buying good electronics for your use case and keep upto date with latest news about TechStack.LK"
    pathname={location.pathname}
  />
);
