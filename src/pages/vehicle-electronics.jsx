import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function VehicleElectronics() {
  return (
    <Layout>
      <SEO
        title="Vehicle Electronics"
        description="Modernize your car with latest car audio / video, GPS. Secure your life and car with vehicle security systems"
      />
      <main>
        <HeadingCategory>Vehicle Electronics</HeadingCategory>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/car-audio">
            <StaticImage
              src="../images/categories/car-audio.png"
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
              src="../images/categories/car-video.png"
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
              src="../images/categories/gps.png"
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
              src="../images/categories/dash-camera.png"
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
              src="../images/categories/car-alarm.png"
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
