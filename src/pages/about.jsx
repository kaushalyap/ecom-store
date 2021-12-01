import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          About Us
        </h1>
        <p className="mb-6 lg:mb-8">
          We are online only electronic store, based in Colombo, run by young
          entrepreneurs.
        </p>
        <h2
          className="mb-5 font-headline text-3xl font-medium lg:mb-8 lg:text-7xl"
          id="why-us/"
        >
          Why Us?
        </h2>
        <div className="mb-8 lg:mb-12" id="sri-lankan-owned">
          <h3 className="mb-2 font-headline text-4xl lg:hidden">
            Sri Lankan Owned
          </h3>
          <div className="md:flex">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <StaticImage
                src="../images/colombo-galle-face.jpg"
                className="rounded-lg"
              />
            </div>
            <div className="md:ml-4 md:w-1/2 lg:ml-8">
              <h3 className="hidden mt-4 mb-4 font-headline text-5xl lg:block">
                Sri Lankan Owned
              </h3>
              <p className="mb-2">
                It is tragic that the businesses like e-commerce stores that
                could be easily run by Sri Lankans actually ran by foreigners.
                Best example is Daraz.lk which is a Chinese owned company. This
                leads to draining of Sri Lankan money to foreign nations, which
                cripples our economy.
              </p>
              <p>
                <Link to="/" className="text-blue-600">
                  TechStack.LK
                </Link>
                &nbsp; is a Sri Lankan owned business run by young Sri Lankan
                entrepreneurs, so help us to help our country. By the way it
                does not have only be us, but any Sri Lankan owned business.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-12" id="free-delivery">
          <h3 className="mb-4 font-headline text-2xl lg:hidden">
            FREE Delivery Islandwide
          </h3>
          <div className="mb-4 md:flex md:flex-row-reverse">
            <div className="mb-4 md:mb-0 md:ml-4 md:w-1/2">
              <StaticImage
                src="../images/free-delivery.png"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 lg:mr-8">
              <h3 className="hidden mt-8 mb-2 font-headline text-5xl leading-tight lg:block">
                FREE Delivery Islandwide
              </h3>
              <p className="text-3xl">
                Every single item is delivered to your doorstep for free
                regardless of where you live or the price of the item.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-12" id="customer-happiness-driven">
          <h3 className="mb-2 font-headline text-2xl lg:hidden">
            Customer Happiness over Sales
          </h3>
          <div className="md:flex">
            <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
              <StaticImage src="../images/people.png" className="rounded-lg" />
            </div>
            <div className="md:w-1/2 lg:ml-8">
              <h3 className="hidden mt-3 mb-2 font-headline text-5xl leading-tight lg:block">
                Customer Happiness&nbsp;
                <span className="text-4xl">over</span>
                &nbsp;Sales
              </h3>
              <p className="my-2">
                Most companies driven by number of sales they make, but we are
                n&apos;t. &nbsp;
                <b>We are soley driven by customer happiness.</b>
              </p>
              <p className="mb-5">
                If you are non techie do not much about electronics, not sure if
                particular product suitable for your use case, please reach out
                we will give our honest opinion. We will never trick you to buy
                a particular item or trick you to buy something expensive which
                does not fit your use case.
              </p>
            </div>
          </div>
        </div>
        <div id="competitive-pricing" className="lg:mb-12">
          <h3 className="mb-2 font-headline text-2xl lg:hidden">
            Competitive Pricing
          </h3>

          <div className="mb-4 md:flex md:flex-row-reverse md:mb-0">
            <div className="md:ml-4 md:w-1/2">
              <StaticImage
                src="../images/competitive-pricing.jpg"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 lg:mr-8">
              <h3 className="hidden mb-4 font-headline text-5xl lg:block">
                Competitive Pricing
              </h3>
              <p className="my-2 xl:text-2xl">
                Most companies say they have the lowest cost, most of the time
                this is not true, it is a lie to attract more customers. Or they
                say X% off what they have done is artificially increased the
                price and reduced the price to normal amount. These cheap
                marketing gimmicks. We believe lies cripple society, so &nbsp;
                <b>no marketing lies.</b>
              </p>
              <p>
                Every product on our store is priced fairly, while making it
                affordable and ourselves sustainable. In most cases &nbsp;
                <b>we may have lowest cost</b>
                ,&nbsp;since we are online only store, no showrooms or lots of
                employees which result in lower costs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
