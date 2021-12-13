import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';

export default function WearablesSmartHome() {
  return (
    <Layout>
      <SEO
        title="Wearables & Smart Home Devices"
        description="Have a comfortable digital experience on the go with Smartwatches, Fitness bands. Automate and save your time buy ordering a Smart Home assistant"
      />
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Wearables & Smart Home Devices
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/smartwatches">
            <StaticImage
              src="../images/apple-watch-horizontal.png"
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
              src="../images/fitness-band.png"
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
              src="../images/vr-headset.png"
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
              src="../images/amazon-alexa.png"
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
              src="../images/smart-door-lock.png"
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
