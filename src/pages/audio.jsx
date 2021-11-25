import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Audio() {
  return (
    <Layout>
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Audio Electronics
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/speakers">
            <div>
              <StaticImage
                src="../images/speaker.png"
                alt="Speaker"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Speakers
              </h3>
            </div>
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
          <Link to="/headphones">
            <StaticImage
              src="../images/headphone.png"
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
          <Link to="/headsets">
            <StaticImage
              src="../images/wireless-earbuds.png"
              alt="wireless earbuds"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Headsets
            </h3>
          </Link>
          <Link to="/mikes-amps">
            <div>
              <StaticImage
                src="../images/microphone.png"
                alt="microphone"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Mikes & Amps
              </h3>
            </div>
          </Link>
          <Link to="/radios">
            <div>
              <StaticImage
                src="../images/radio.png"
                alt="Radio with an arial"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Radios
              </h3>
            </div>
          </Link>
          <Link to="/car-audio">
            <StaticImage
              src="../images/car-audio.png"
              alt="wireless headphone"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Car Audio
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
