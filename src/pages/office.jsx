import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Office() {
  return (
    <Layout>
      <main className="container mx-auto mb-20">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Office Electronics
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/printers">
            <StaticImage
              src="../images/Printer.webp"
              alt="printer"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Printers & Accessories
            </h3>
          </Link>
          <Link to="/photocopier">
            <StaticImage
              src="../images//Photocopier.png"
              alt="photocopier"
              objectPosition="bottom"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Photocopiers & Duplicators
            </h3>
          </Link>

          <Link to="/scanners">
            <StaticImage
              src="../images/Scanner.png"
              alt="scanner"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Scanners
            </h3>
          </Link>
          <Link to="/projectors">
            <StaticImage
              src="../images/Projector.png"
              alt="video projector"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Video Projectors & Accessories
            </h3>
          </Link>
          <Link to="/telephone-fax-machine">
            <StaticImage
              src="../images/Telephone.png"
              alt="telephone"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Telephones & Fax Machines
            </h3>
          </Link>
          <Link to="/pos">
            <StaticImage
              src="../images/PoS.png"
              alt="point-of-sale"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Point-of-Sale Equipment
            </h3>
          </Link>
          <Link to="/cash-counter-other">
            <StaticImage
              src="../images/CashCounter.png"
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
