import { HeadProps } from 'gatsby';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import { FaqList } from '../features/marketing';

export default function Faq() {
  return (
    <MainLayout>
      <main className="mb-40">
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium text-center md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          FAQs
        </h1>
        <FaqList />
      </main>
    </MainLayout>
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="FAQ"
    description="Questions that you may have may be already answered here, check them out before reaching us"
    pathname={location.pathname}
  />
);
