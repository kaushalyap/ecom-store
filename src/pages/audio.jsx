import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Audio() {
  return (
    <Layout>
      <main className="container mx-auto mb-20">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Audio Electronics
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/audio">
            <div>
              <StaticImage
                src="../images/Speaker2.png"
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
          <Link to="/home-theater-setups">
            <StaticImage
              src="../images/Home-Theatre-2 1.png"
              alt="four tall speakers"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Home Theatre Systems
            </h3>
          </Link>
          <Link to="/audio">
            <div>
              <StaticImage
                src="../images/Microphone.png"
                alt="Speaker"
                placeholder="blurred"
                className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
                objectFit="contain"
              />
              <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
                Microphones
              </h3>
            </div>
          </Link>
          <Link to="/radios">
            <div>
              <StaticImage
                src="../images/Radio.png"
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
          <Link to="/headsets">
            <StaticImage
              src="../images/Headset.png"
              alt="wireless earbuds"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Headsets
            </h3>
          </Link>

          <Link to="/av-cables-other">
            <StaticImage
              src="../images/Audio-Video-Cable.png"
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
