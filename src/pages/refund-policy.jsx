import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function RefundPolicy() {
  return (
    <Layout>
      <SEO
        title="Refund Policy"
        description="Know in which cases you can receive refunds for your orders"
      />
      <main className="lg:w-2/3 xl:w-2/5">
        <h1 className="mt-10 mb-5 font-headline text-2xl font-medium md:mb-8 md:text-4xl xl:mb-8 xl:text-5xl 2xl:mb-10">
          Refund Policy
        </h1>
        <p className="mb-2 text-justify">
          Our policy lasts 30 days. If 30 days have gone by since your purchase,
          unfortunately we can&apos;t offer you a refund or exchange.
        </p>
        <p className="mb-2 text-justify">
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>
        <p className="mb-2 text-justify">
          Several types of goods are exempt from being returned. Perishable
          goods such as food, flowers, newspapers or magazines cannot be
          returned. We also do not accept products that are intimate or sanitary
          goods, hazardous materials, or flammable liquids or gases.
        </p>
        <p className="mb-2 text-justify">Additional non-returnable items:</p>
        <ul className="mb-2 list-disc list-inside">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        <p className="mb-2 text-justify">
          To complete your return, we require a receipt or proof of purchase.
        </p>
        <p className="mb-2 text-justify">
          Please do not send your purchase back to the manufacturer.
        </p>
        <p className="mb-2 text-justify">
          There are certain situations where only partial refunds are granted:
          (if applicable)
        </p>
        <ul className="mb-2 list-disc list-inside">
          <li>Book with obvious signs of use</li>
          <li>
            CD, DVD, VHS tape, software, video game, cassette tape, or vinyl
            record that has been opened
          </li>
          <li>
            Any item not in its original condition, is damaged or missing parts
            for reasons not due to our error.
          </li>
        </ul>
        <p className="text-justify">
          Any item that is returned more than 30 days after delivery
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Refunds (if applicable)
        </h2>
        <p className="text-justify">
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If you are
          approved, then your refund will be processed, and a credit will
          automatically be applied to your credit card or original method of
          payment, within a certain amount of days.
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Late or missing refunds (if applicable)
        </h2>
        <p className="text-justify">
          If you haven&apos;t received a refund yet, first check your bank
          account again. Then contact your credit card company, it may take some
          time before your refund is officially posted. Next contact your bank.
          There is often some processing time before a refund is posted. If
          you&apos;ve done all of this and you still have not received your
          refund yet, please contact us at .
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Sale items (if applicable)
        </h2>
        <p className="text-justify">
          Only regular priced items may be refunded, unfortunately sale items
          cannot be refunded.
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Exchanges (if applicable)
        </h2>
        <p className="mb-2 text-justify">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at and send your item
          to:
        </p>
        <p>
          Nugegoda,
          <br />
          Colombo,
          <br />
          LK 10250
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Gifts
        </h2>
        <p className="mb-2 text-justify">
          If the item was marked as a gift when purchased and shipped directly
          to you, you&apos;ll receive a gift credit for the value of your
          return. Once the returned item is received, a gift certificate will be
          mailed to you.
        </p>
        <p>
          If the item was n&apos;t marked as a gift when purchased, or the gift
          giver had the order shipped to themselves to give to you later, we
          will send a refund to the gift giver and he will find out about your
          return.
        </p>
        <h2 className="mt-8 mb-2 font-headline font-medium md:text-xl xl:text-2xl">
          Shipping
        </h2>
        <p className="mb-2 text-justify">
          To return your product, you should mail your product to:
        </p>
        <p className="mb-2">
          Nugegoda,
          <br />
          Colombo,
          <br />
          LK 10250
        </p>
        <p className="mb-2 text-justify">
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
        <p className="mb-2 text-justify">
          Depending on where you live, the time it may take for your exchanged
          product to reach you, may vary.
        </p>
        <p className="text-justify">
          If you are shipping an item over Rs.1000.00, you should consider using
          a trackable shipping service or purchasing shipping insurance. We
          don&apos;t guarantee that we will receive your returned item.
        </p>
      </main>
    </Layout>
  );
}
