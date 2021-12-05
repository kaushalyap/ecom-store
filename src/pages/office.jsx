import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';

export default function Office() {
  return (
    <Layout>
      <SEO
        title="Office Electronics"
        description="Make your office life more easier with next-gen office equipment"
      />
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Office Electronics
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/printers-scanners">
            <StaticImage
              src="../images/printer.webp"
              alt="printer"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Printers, Scanners & Accessories
            </h3>
          </Link>
          <Link to="/photocopier">
            <StaticImage
              src="../images/photocopier.png"
              alt="photocopier"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Photocopiers & Duplicators
            </h3>
          </Link>

          <Link to="/projectors">
            <StaticImage
              src="../images/projector.png"
              alt="video projector"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Video Projectors & Accessories
            </h3>
          </Link>
          <Link to="/telephones-fax-machines">
            <StaticImage
              src="../images/telephone.png"
              alt="telephone"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Telephones & Fax Machines
            </h3>
          </Link>
          <Link to="/smart-boardroom-equipment">
            <StaticImage
              src="../images/smart-board-room.png"
              alt="board room table with smart panels mikes and etc"
              objectFit="contain"
              placeholder="blurred"
              objectPosition="bottom"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Smart Board Room Equipment
            </h3>
          </Link>
          <Link to="/pos">
            <StaticImage
              src="../images/pos.png"
              alt="point-of-sale system"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Point-of-Sale Equipment
            </h3>
          </Link>
          <Link to="/cash-counters-other">
            <StaticImage
              src="../images/cash-counter.png"
              alt="cash counter machine with money"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Cash Counters & Other
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
