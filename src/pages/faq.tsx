import { HeadProps } from 'gatsby';
import DisclosureItem from '../components/DisclosureItem';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import Faqs from '../constants/Faqs';

export default function Faq() {
  return (
    <MainLayout>
      <main className="mb-40">
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium text-center md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          FAQs
        </h1>
        <div className="p-2 max-w-xl bg-blue-50 rounded-2xl md:p-4 md:mx-auto lg:max-w-2xl">
          {Faqs.map((item) => (
            <DisclosureItem key={item.key} question={item.question}>
              {item.answer}
            </DisclosureItem>
          ))}
        </div>
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
