import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Security() {
  return (
    <Layout>
      <main className="container mx-auto mb-20">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Security & Surveillance
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/cctv">
            <StaticImage
              src="../images/cctv.png"
              alt="cctv camera"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Security Camera Equipment
            </h3>
          </Link>
          <Link to="/home-security-systems/">
            <StaticImage
              src="../images/smart-door-lock.png"
              alt="smart door lock"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Home Security Systems
            </h3>
          </Link>
          <Link to="/biometrics">
            <StaticImage
              src="../images/fingerprint-reader-circle.png"
              alt="fingerprint reader"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Biometrics
            </h3>
          </Link>
          <Link to="/sensors-detectors">
            <StaticImage
              src="../images/motion-detector.png"
              alt="motion detector"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Sensors & Detectors
            </h3>
          </Link>
          <Link to="/alarms-sirens">
            <StaticImage
              src="../images/fire-alarm.png"
              alt="wireless headphone"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Alarms & Sirens
            </h3>
          </Link>
          <Link to="/radio-scanners">
            <StaticImage
              src="../images/radio-scanner.png"
              alt="walkie talkie"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Radio Scanners
            </h3>
          </Link>
          <Link to="/headphones">
            <StaticImage
              src="../images/rsa-token.png"
              alt="USB authentication key"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Authentication Tokens
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
