import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Camera() {
  return (
    <Layout>
      <SEO
        title="Camera & Photo"
        description="Record your life with the perfect camera, camcoders under the perfect settings. See what is out of reach with binoculars and telescopes"
      />
      <main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
          Camera & Photo
        </h1>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/film-cameras/">
            <StaticImage
              src="../images/film-camera.png"
              alt="film camera"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Film Photography
            </h3>
          </Link>
          <Link to="/digital-cameras/">
            <StaticImage
              src="../images/digital-camera.png"
              alt="digital cameras"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Digital Cameras
            </h3>
          </Link>
          <Link to="/lenses-filters">
            <StaticImage
              src="../images/lense.png"
              alt="camera lense"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Lenses & Filters
            </h3>
          </Link>
          <Link to="/camcorders">
            <StaticImage
              src="../images/camcorder.png"
              alt="camcorder"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Camcorders & Accessories
            </h3>
          </Link>
          <Link to="/binoculars-telescopes">
            <StaticImage
              src="../images/binocular.png"
              alt="binoculars"
              objectFit="scale-down"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Binoculars & Telescopes
            </h3>
          </Link>
          <Link to="/printers-scanners">
            <StaticImage
              src="../images/printer.webp"
              alt="printer"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Printers, Scanners & Accessories
            </h3>
          </Link>
          <Link to="/lighting">
            <StaticImage
              src="../images/flash-light.png"
              alt="flash light"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Lighting & Accessories
            </h3>
          </Link>
          <Link to="/tripods-supports">
            <StaticImage
              src="../images/tripod.png"
              alt="camera on a tripod"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Tripods & Supports
            </h3>
          </Link>
          <Link to="/camera-drones">
            <StaticImage
              src="../images/camera-drone.png"
              alt="camera-drone"
              objectFit="contain"
              placeholder="blurred"
              className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
            />
            <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
              Camera Drones
            </h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
