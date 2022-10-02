import { HeadProps } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import { CheckoutBag } from '../features/checkout';

export default function Bag() {
  return (
    <MainLayout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-full">
        <HeadingPage>Bag</HeadingPage>
        <CheckoutBag />
      </main>
    </MainLayout>
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO title="Shopping Bag" isIndexable={false} pathname={location.pathname} />
);
