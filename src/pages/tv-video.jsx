import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function TvVideo() {
  return (
    <Layout>
      <SEO
        title="TV & Video"
        description="Order your next TV, DVD, home theatre now to brighten up your home entertainment"
      />
      <main>
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          TV & Video
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/televisions">
            <StaticImage
              src="../images/tv.png"
              alt="television"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Televisions
            </h3>
          </Link>
          <Link to="/dvd-players-setups">
            <StaticImage
              src="../images/dvd-player.png"
              alt="DVD player"
              objectFit="scale-down"
              objectPosition="center"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              DVD Players & Setups
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
          <Link to="/home-theaters">
            <StaticImage
              src="../images/home-theatre-system.png"
              alt="four tall speakers"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Home Theatre Systems
            </h3>
          </Link>
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
          <Link to="/playstations">
            <StaticImage
              src="../images/playstation-5.png"
              alt="playstation 5 console"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Playstation & Accessories
            </h3>
          </Link>
          <Link to="/av-cables-other">
            <StaticImage
              src="../images/audio-video-cable.png"
              alt="one end of an audio video cable"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              AV Cables & Other
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
