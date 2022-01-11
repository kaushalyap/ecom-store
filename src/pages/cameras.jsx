import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Camera() {
  return (
    <Layout>
      <SEO
        title="Camera & Photo"
        description="Record your life with the perfect camera, camcoders under the perfect settings. See what is out of reach with binoculars and telescopes"
      />
      <main>
        <HeadingCategory>Camera & Photo</HeadingCategory>
        <div
          id="cards"
          className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
        >
          <Link to="/film-cameras/">
            <StaticImage
              src="../images/categories/film-camera.png"
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
              src="../images/categories/digital-camera.png"
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
              src="../images/categories/lense.png"
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
              src="../images/categories/camcorder.png"
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
              src="../images/categories/binocular.png"
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
              src="../images/categories/printer.png"
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
              src="../images/categories/flash-light.png"
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
              src="../images/categories/tripod.png"
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
              src="../images/categories/camera-drone.png"
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
