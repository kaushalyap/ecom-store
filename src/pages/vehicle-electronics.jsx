import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';

export default function VehicleElectronics() {
  return (
    <Layout>
      <SEO
        title="Vehicle Electronics"
        description="Modernize your car with latest car audio / video, GPS. Secure your life and car with vehicle security systems"
      />
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Vehicle Electronics
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/car-audio">
            <StaticImage
              src="../images/car-audio.png"
              alt="car audio system on dashboard"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Car Audio
            </h3>
          </Link>
          <Link to="/car-video">
            <StaticImage
              src="../images/car-video.png"
              alt="car video player"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Car Video
            </h3>
          </Link>
          <Link to="/gps">
            <StaticImage
              src="../images/gps.png"
              alt="GPS screen"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              GPS
            </h3>
          </Link>
          <Link to="/dash-camera">
            <StaticImage
              src="../images/dash-camera.png"
              alt="dash camera"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Dashboard Cameras
            </h3>
          </Link>
          <Link to="/car-alarm-security">
            <StaticImage
              src="../images/car-alarm.png"
              alt="car alarm"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Car Alarms & Security
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
