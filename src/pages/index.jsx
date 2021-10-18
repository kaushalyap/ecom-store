import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';

export default function Index() {
  return (
    <Layout>
      <main className="container mx-auto">
        <Carousel />
      </main>
      <section
        id="explore-categories"
        className="mx-5 mt-10 mb-20 md:mx-10 xl:container xl:mx-auto xl:mt-16"
      >
        <h2 className="mb-5 font-headline text-xl md:mb-8 md:text-2xl xl:text-2xl">
          Explore by Category
        </h2>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Laptop.webp"
                alt="laptop"
                objectFit="contain"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Computers & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Smartphone.webp"
                alt="smartphone"
                objectFit="contain"
                className="p-10 w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Smartphones & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Printer.webp"
                alt="Printer"
                objectFit="contain"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Office Electronics
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/TV.webp"
                alt="TV"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                TV & Video
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Gaming.webp"
                alt="XBox"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Video Game Consoles & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Speaker.webp"
                alt="Speaker"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Audio Electronics
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Camera.webp"
                objectFit="contain"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Camera & Photo
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/CCTV.webp"
                alt="CCTV camera"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Security & Surveillance
              </h3>
            </div>
          </Link>
          <Link to="/">
            <div>
              <StaticImage
                src="../images/Smartwatch.webp"
                alt="Smartwatch"
                objectFit="contain"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Wearables & Other
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
