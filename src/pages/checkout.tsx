import { HeadProps } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import { CheckoutForm, ShoppingSummary } from '../features/checkout/';

export default function Checkout() {
  return (
    <MainLayout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-full">
        <HeadingPage>Checkout</HeadingPage>

        <div className="md:flex md:gap-16">
          <CheckoutForm />
          <ShoppingSummary />
        </div>
      </main>
    </MainLayout>
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO title="Checkout" isIndexable={false} pathname={location.pathname} />
);
