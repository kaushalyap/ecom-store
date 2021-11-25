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
        className="mx-5 mb-20 md:mx-10 xl:container xl:mx-auto xl:mt-16"
      >
        <h2 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Shop by Category
        </h2>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/computers">
            <div>
              <StaticImage
                src="../images/laptop-front.webp"
                alt="laptop"
                objectFit="contain"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Computers & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/mobile-phones">
            <div>
              <StaticImage
                src="../images/smartphone.webp"
                alt="smartphone"
                placeholder="blurred"
                objectFit="contain"
                className="p-10 w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Mobile Phones & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/office">
            <div>
              <StaticImage
                src="../images/printer.webp"
                alt="printer"
                objectFit="contain"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Office Electronics
              </h3>
            </div>
          </Link>
          <Link to="/tv-video">
            <div>
              <StaticImage
                src="../images/tv.webp"
                alt="TV"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                TV & Video
              </h3>
            </div>
          </Link>
          <Link to="/gaming">
            <div>
              <StaticImage
                src="../images/xbox-joystick-black.webp"
                alt="XBox"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="scale-down"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Video Game Consoles & Accessories
              </h3>
            </div>
          </Link>
          <Link to="/audio">
            <div>
              <StaticImage
                src="../images/speaker.webp"
                alt="speaker"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Audio Electronics
              </h3>
            </div>
          </Link>
          <Link to="/cameras">
            <div>
              <StaticImage
                src="../images/camera.webp"
                alt="camera"
                objectFit="contain"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Camera & Photo
              </h3>
            </div>
          </Link>
          <Link to="/security">
            <div>
              <StaticImage
                src="../images/cctv.png"
                alt="CCTV camera"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Security & Surveillance
              </h3>
            </div>
          </Link>
          <Link to="/vehicle-electronics">
            <div>
              <StaticImage
                src="../images/gps.png"
                alt="vehicle gps screen"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Vehicle Electronics
              </h3>
            </div>
          </Link>
          <Link to="/wearables-smart-home-devices">
            <div>
              <StaticImage
                src="../images/apple-watch.png"
                alt="apple-watch"
                placeholder="blurred"
                objectFit="contain"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Wearables & Smart Home Devices
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
