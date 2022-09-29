import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type Props = {
  id: string;
  href: string;
  imageSrc: IGatsbyImageData;
  imageAlt: string;
  name: string;
  price: string;
};

export default function ShortProductCard({
  id,
  href,
  imageSrc,
  imageAlt,
  name,
  price,
}: Props) {
  return (
    <Link key={id} to={href} className="group" target="_blank">
      <div className="overflow-hidden w-full bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <GatsbyImage
          image={imageSrc}
          alt={imageAlt}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </Link>
  );
}
