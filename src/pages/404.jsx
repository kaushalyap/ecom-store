import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO/SEO';

export default function NotFoundPage() {
  return (
    <Layout>
      <main className="md:text-center">
        <h1 className="mt-10 mb-8 font-headline text-4xl font-bold md:mt-20 md:mb-10 md:text-5xl md:text-center lg:mb-12 xl:mb-16 xl:text-7xl">
          Ooops!
        </h1>

        <StaticImage
          src="../images/illustrations/404.svg"
          className="md:max-w-md"
          placeholder="blurred"
          alt="ship captain looking with telescope"
        />
        <p className="mx-auto mt-8 mb-6 max-w-sm text-xl font-thin tracking-wide md:mb-8">
          Sorry page you are looking for does not exist, try searching or
        </p>
        <Link
          to="/"
          className="py-2 px-3 font-bold tracking-wider text-white bg-brand rounded-xl md:py-3 md:px-4 md:text-lg"
        >
          Go to Home Page
        </Link>
      </main>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Page not found"
    isIndexable={false}
    pathname={location.pathname}
  />
);
