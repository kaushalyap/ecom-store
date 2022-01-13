import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeadingPage from '../components/HeadingPage/HeadingPage';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Sri Lankan owned online only electronic store with free deliveries which value customer happiness over sales"
      />
      <main>
        <HeadingPage>About Us</HeadingPage>
        <p className="mb-6 font-light tracking-wide lg:mb-8 xl:text-2xl">
          We are online only electronic store, located in Nugegoda, Colombo.
        </p>
        <h2
          className="mb-5 font-headline text-3xl font-medium lg:mb-8 lg:text-7xl xl:mb-10 xl:text-8xl"
          id="why-us/"
        >
          Why Us?
        </h2>
        <div className="mb-8 lg:mb-12 xl:mb-16" id="sri-lankan-owned">
          <h3 className="mb-2 font-headline text-2xl md:hidden">
            Sri Lankan Owned
          </h3>
          <div className="md:flex">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <StaticImage
                alt="Colombo Galle face from distance"
                src="../images/about/colombo-galle-face.jpg"
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:ml-4 md:w-1/2 lg:ml-8">
              <h3 className="hidden mt-4 mb-4 font-headline text-5xl leading-tight md:block lg:text-6xl xl:text-7xl 2xl:mt-12">
                Sri Lankan Owned
              </h3>
              <p className="mb-2 font-light tracking-wide lg:text-2xl xl:mb-4 xl:text-3xl">
                No draining of profits outside to our motherland.
              </p>
              <p className="font-light tracking-wide lg:text-2xl xl:text-3xl">
                <Link to="/" className="text-blue-600">
                  TechStack.LK
                </Link>
                &nbsp; is a Sri Lankan owned business run by young
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-12 xl:mb-16" id="free-delivery">
          <h3 className="mb-4 font-headline text-2xl md:hidden">
            Free Delivery Islandwide
          </h3>
          <div className="mb-4 md:flex md:flex-row-reverse">
            <div className="mb-4 md:mb-0 md:ml-4 md:w-1/2">
              <StaticImage
                alt="two hands giving set of parcel to other two hands"
                src="../images/about/free-delivery-hands.jpg"
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2 lg:mr-8 2xl:mr-0">
              <h3 className="hidden mt-8 mb-2 font-headline text-5xl leading-tight md:block lg:text-6xl xl:text-7xl">
                Free Delivery Islandwide
              </h3>
              <p className="font-light tracking-wide lg:text-2xl xl:text-3xl">
                For Every single item.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-12 xl:mb-16" id="customer-happiness-driven">
          <h3 className="mb-2 font-headline text-2xl md:hidden">
            Customer Happiness over Sales
          </h3>
          <div className="md:flex">
            <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
              <StaticImage
                src="../images/about/happy-customer.jpg"
                alt="man smiling on the call"
                className="w-full h-full rounded-lg"
                objectPosition="top right"
              />
            </div>
            <div className="md:w-1/2 lg:ml-8">
              <h3 className="hidden mt-3 mb-2 font-headline text-5xl leading-tight md:block lg:text-6xl xl:mb-6 xl:text-7xl 2xl:mt-8">
                Customer Joy
                <br />
                <span className="text-4xl">over</span>
                &nbsp;Sales
              </h3>
              <p className="my-2 font-light tracking-wide lg:text-2xl xl:text-3xl">
                Not&nbsp;
                <Link to="/blog/" className="text-blue-600">
                  sales driven
                </Link>
                , but customer happiness driven.
              </p>
              <p className="mb-5 font-light tracking-wide lg:text-2xl xl:text-3xl">
                Not a techie, contact us we will respond to you&nbsp;
                <Link to="/blog/" className="text-blue-600">
                  honestly.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div id="competitive-pricing" className="lg:mb-12">
          <h3 className="mb-2 font-headline text-2xl md:hidden">
            Competitive Pricing
          </h3>

          <div className="mb-4 md:flex md:flex-row-reverse md:mb-0">
            <div className="mb-4 md:ml-4 md:w-1/2">
              <StaticImage
                alt="price tags hagging from strings"
                src="../images/about/competitive-pricing.jpg"
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2 lg:mr-8">
              <h3 className="hidden mt-6 mb-4 font-headline text-5xl leading-tight md:block lg:text-6xl xl:mb-6 xl:text-7xl xl:leading-tight 2xl:mt-12">
                Competitive Pricing
              </h3>
              <p className="mb-2 font-light tracking-wide lg:text-2xl xl:mb-4 xl:text-3xl">
                No lowest price or 20% off&nbsp;
                <Link to="/blog/" className="text-blue-600">
                  marketing gimmicks.
                </Link>
              </p>
              <p className="font-light tracking-wide lg:text-2xl xl:text-3xl">
                We may have the lowest prices due to the way we&nbsp;
                <Link to="/blog/" className="text-blue-600">
                  operate.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
