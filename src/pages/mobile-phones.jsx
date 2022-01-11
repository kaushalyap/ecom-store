import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Smartphones() {
  return (
    <Layout>
      <SEO
        title="Smartphones & Accessories"
        description="Your next smartphone is waiting for you, in a click of button which will be delivered to you for free"
      />
      <main>
        <HeadingCategory>Smartphones & Accessories</HeadingCategory>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/smartphones">
            <StaticImage
              src="../images/categories/smartphone.png"
              alt="iphone"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Smartphones
            </h3>
          </Link>
          <Link to="/feature-phones">
            <StaticImage
              src="../images/categories/feature-phone.png"
              alt="feature phone"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Feature Phones
            </h3>
          </Link>
          <Link to="/headsets">
            <StaticImage
              src="../images/categories/wireless-earbuds.png"
              alt="wireless earbuds"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Headsets
            </h3>
          </Link>
          <Link to="/memory-cards">
            <StaticImage
              src="../images/categories/memory-card.png"
              alt="SD card"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Memory Cards
            </h3>
          </Link>
          <Link to="/batteries-chargers">
            <StaticImage
              src="../images/categories/phone-charger.png"
              alt="Smartphone connected to a charger"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Batteries & Chargers
            </h3>
          </Link>
          <Link to="/phone-cases">
            <StaticImage
              src="../images/categories/phone-cases.png"
              alt="Phone cases in four colors"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Cases & Screen Protectors
            </h3>
          </Link>
          <Link to="/mounts-holders">
            <StaticImage
              src="../images/categories/phone-stand.png"
              alt="iPhone on a phone stand"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Mounts & Holders
            </h3>
          </Link>
          <Link to="/cables-other">
            <StaticImage
              src="../images/categories/data-cables.png"
              alt="coiled data Cable"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Cables & Other
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
