import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Smartphones() {
  return (
    <Layout>
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Smartphones & Accessories
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/smartphones">
            <StaticImage
              src="../images/smartphone.png"
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
              src="../images/feature-phone.png"
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
              src="../images/wireless-earbuds.png"
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
              src="../images/memory-card.png"
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
              src="../images/phone-charger.png"
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
              src="../images/phone-cases.png"
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
              src="../images/phone-stand.png"
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
              src="../images/data-cables.png"
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
