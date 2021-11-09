import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Game() {
  return (
    <Layout>
      <main className="container mx-auto mb-20">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Video Game Consoles & Accessories
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/xbox">
            <StaticImage
              src="../images/Xbox.png"
              alt="xbox console and joystick"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Xbox & Accessories
            </h3>
          </Link>
          <Link to="/playstation">
            <StaticImage
              src="../images/Playstation-5.png"
              alt="playstation 5 consoles"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Playstation & Accessories
            </h3>
          </Link>
          <Link to="/vr-headsets">
            <StaticImage
              src="../images/VR-Headset 1.png"
              alt="playstation 5 consoles"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              VR Headsets
            </h3>
          </Link>
          <Link to="/gaming-laptop">
            <StaticImage
              src="../images/Gaming-Laptop.png"
              alt="Razer Gaming Laptop"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Gaming Laptops
            </h3>
          </Link>
          <Link to="/gaming-pc">
            <StaticImage
              src="../images/Gaming-PC.png"
              alt="Computer system unit with green lights"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Gaming Builds & Accessories
            </h3>
          </Link>

          <Link to="/headphones">
            <StaticImage
              src="../images/Headphone.png"
              alt="wireless headphone"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Headphones
            </h3>
          </Link>
          <Link to="/nintendo">
            <StaticImage
              src="../images/Nintendo-Switch.png"
              alt="Nintendo Switch"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Nintendo Switches
            </h3>
          </Link>
          <Link to="/gaming-chair-other">
            <StaticImage
              src="../images/GC.png"
              alt="Gaming Chair"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Gaming Chairs & Other
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
