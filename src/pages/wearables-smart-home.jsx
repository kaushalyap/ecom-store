import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function WearablesSmartHome() {
  return (
    <Layout>
      <SEO
        title="Wearables & Smart Home Devices"
        description="Have a comfortable digital experience on the go with Smartwatches, Fitness bands. Automate and save your time buy ordering a Smart Home assistant"
      />
      <main>
        <HeadingCategory>Wearables & Smart Home Devices</HeadingCategory>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/smartwatches">
            <StaticImage
              src="../images/categories/apple-watch-horizontal.png"
              alt="Apple smartwatch"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Smartwatches
            </h3>
          </Link>
          <Link to="/fitness-bands">
            <StaticImage
              src="../images/categories/fitness-band.png"
              alt="fitness band"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Fitness Bands
            </h3>
          </Link>
          <Link to="/vr-headsets">
            <StaticImage
              src="../images/categories/vr-headset.png"
              alt="playstation 5 consoles"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              VR Headsets
            </h3>
          </Link>
          <Link to="/smart-home-assistants">
            <StaticImage
              src="../images/categories/amazon-alexa.png"
              alt="Alexa smart home assistant"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Smart Home Assistants
            </h3>
          </Link>
          <Link to="/home-door-locks/">
            <StaticImage
              src="../images/categories/smart-door-lock.png"
              alt="smart door lock"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Smart Door Locks
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
