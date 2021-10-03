import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';

export default function Index() {
  return (
    <Layout>
      <div className="container">
        <Carousel />
        <h1 className="font-headline text-3xl">Explore by Category</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tenetur
          dolores ipsum, praesentium similique in? Porro voluptatibus earum et.
          Exercitationem iste fugiat aspernatur. Similique eos mollitia
          inventore quibusdam perspiciatis odit?
        </p>
      </div>
    </Layout>
  );
}
