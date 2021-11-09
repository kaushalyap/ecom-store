import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export default function Camera() {
  return (
    <Layout>
      <main className="container mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Camera & Photo
        </h1>
      </main>
      <Link to="/video-recorder">
        <StaticImage
          src="../images/Video-Recorder.png"
          alt="video projector"
          objectFit="contain"
          placeholder="blurred"
          className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
        />
        <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
          Video Camera
        </h3>
      </Link>
    </Layout>
  );
}
