import React from 'react';
import Layout from '../components/Layout';
import Faqs from '../constants/Faqs';
import DisclosureItem from '../components/DisclosureItem/DisclosureItem';
import SEO from '../components/SEO/SEO';

export default function Faq() {
  return (
    <Layout>
      <SEO
        title="FAQs"
        description="Questions that you may have may be already answered here, check them out before reaching us"
      />
      <main className="mx-3 mb-40">
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium text-center md:mb-8 md:text-4xl xl:mb-8 xl:text-6xl">
          FAQs
        </h1>
        <div className="p-2 max-w-xl bg-blue-50 rounded-2xl md:p-4 md:mx-auto lg:max-w-2xl">
          {Faqs.map((item) => (
            <DisclosureItem
              key={item.key}
              question={item.question}
              // eslint-disable-next-line react/no-children-prop
              children={item.answer}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
