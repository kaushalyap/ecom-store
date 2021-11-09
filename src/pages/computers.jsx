import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Computers() {
  return (
    <Layout>
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Computers & Accessories
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/laptops">
            <StaticImage
              src="../images/Laptops.webp"
              alt="laptop"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Laptops
            </h3>
          </Link>
          <Link to="/desktops">
            <StaticImage
              src="../images/Desktops.png"
              alt="desktop"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Desktops
            </h3>
          </Link>
          <Link to="/tablets">
            <StaticImage
              src="../images/Tablets.png"
              alt="tablet"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Tablets & eBook Readers
            </h3>
          </Link>
          <Link to="/monitors">
            <StaticImage
              src="../images/Monitors.png"
              alt="monitor"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Monitors & Accessories
            </h3>
          </Link>
          <Link to="/printers-scanners">
            <StaticImage
              src="../images/Printer.webp"
              alt="printers"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Printers, Scanners & Accessories
            </h3>
          </Link>
          <Link to="/drives-storage">
            <StaticImage
              src="../images/Storage.png"
              alt="external hard disk on a stand"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Drives & Storage
            </h3>
          </Link>
          <Link to="/computer-components">
            <StaticImage
              src="../images/CPU.png"
              alt="Ryzen CPU"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Computer Components
            </h3>
          </Link>
          <Link to="/laptop-desktop-accessories">
            <StaticImage
              src="../images/Accessories.png"
              alt="keyboard and mouse"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Laptop & Desktop Accessories
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
