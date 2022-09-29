import { HeadProps } from 'gatsby';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <MainLayout>
      <main>
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          Blog
        </h1>
        {/*   <BlogCard
          slug=""
          heroImage
          altText=""
          title="First Blog Post"
          author="John Doe"
          date="24th Sept 2022"
        /> */}
      </main>
    </MainLayout>
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Blog"
    description="Learn tips and tricks buying good electronics for your use case and keep upto date with latest news about TechStack.LK"
    pathname={location.pathname}
  />
);
