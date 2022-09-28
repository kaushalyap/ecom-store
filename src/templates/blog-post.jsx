/*
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import useStoryblok from '../lib/storyblok';

export default function BlogPost({ pageContext, location }) {
  let { story } = pageContext;
  story = useStoryblok(story, location);

  return (
    <Layout>
      <article className="mx-5 mb-20 md:mb-40 lg:mx-auto lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        <h1 className="mt-10 mb-2 font-headline text-2xl
        font-medium md:mt-20 md:mb-6 md:text-5xl xl:mb-6 2xl:mb-4">
          {story.name}
        </h1>
        <GatsbyImage
          image={story.image}
          alt={story.altText}
          className="mb-4 w-full rounded-xl"
        />
        <p className="mb-4 text-sm tracking-wide text-gray-500">
          `${story.author}, ${story.date}`
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magni
          atque consequatur dolorum culpa, quas cum accusamus? Quis temporibus
          delectus nesciunt quam quibusdam aut blanditiis odio neque, porro
          voluptates tempora.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          iure sed, quibusdam animi corrupti enim, dolorem excepturi voluptatem
          quos tenetur laudantium autem inventore, mollitia unde aperiam
          cupiditate in velit quod. Error soluta alias explicabo, ad vel eos
          maxime magnam iste maiores ea exercitationem unde suscipit sequi iure
          perferendis debitis reiciendis animi facilis molestiae beatae. Veniam
          qui debitis voluptates dolorum nobis? Voluptate, ex quasi, facere
          ipsum sit dolorem labore enim aspernatur aut nostrum temporibus.
          Doloremque fugit, voluptatem, nesciunt dolorem fuga similique
          voluptatibus dicta officia praesentium labore quod beatae accusantium
          placeat. Quod.
        </p>
      </article>
    </Layout>
  );
}

BlogPost.propTypes = {
  location: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    story: PropTypes.object.isRequired,
  }).isRequired,
};
 */
