import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type Props = {
  to: string;
  title: string;
  image: IGatsbyImageData;
  alt: string;
  objectFit: any; // TODO: remove any
  objectPosition: string;
};

export default function CategoryCard({
  to,
  title,
  image,
  alt,
  objectFit,
  objectPosition,
}: Props) {
  return (
    <Link to={to}>
      <GatsbyImage
        image={image}
        alt={alt}
        objectFit={objectFit}
        objectPosition={objectPosition}
        className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
      />
      <h2 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
        {title}
      </h2>
    </Link>
  );
}
