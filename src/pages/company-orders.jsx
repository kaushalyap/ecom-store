import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function CompanyOrders() {
  return (
    <Layout>
      <SEO
        title="Company Orders"
        description="Get your company electronics freely delivered to you in bulk for lower cost than retail value"
      />
      <main>
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Company Orders
        </h1>
      </main>
    </Layout>
  );
}
