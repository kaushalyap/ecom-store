import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type Props = {
  slug: string;
  heroImage: IGatsbyImageData; // TODO: remove null
  altText: string;
  title: string;
  author: string;
  date: string;
};

export default function BlogCard({
  slug,
  heroImage,
  altText,
  title,
  author,
  date,
}: Props) {
  return (
    <Link
      to={slug}
      className="flex mb-4 bg-gray-50 rounded-lg shadow-lg md:mb-6 lg:mb-8"
    >
      <GatsbyImage
        image={heroImage}
        alt={altText}
        className="w-1/3 rounded-l-lg"
      />
      <div className="pt-3 pr-2 pb-4 pl-3 w-2/3 md:pt-4 md:pl-4 xl:pt-8 xl:pl-8">
        <h2 className="mb-1 font-headline md:text-2xl lg:text-3xl lg:leading-snug xl:mb-2 xl:text-4xl">
          {title}
        </h2>
        <p className="text-xs text-gray-400 md:text-base lg:tracking-wide xl:text-lg">
          {author}, {date}
        </p>
      </div>
    </Link>
  );
}
