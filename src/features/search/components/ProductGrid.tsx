import { IGatsbyImageData } from 'gatsby-plugin-image';
import LongProductCard from './LongProductCard';
// import ShortProductCard from '../ShortProductCard/ShortProductCard';

type Props = {
  id: string;
  href: string;
  name: string;
  price: number;
  imageSrc: IGatsbyImageData;
  imageAlt: string;
};

export default function ProductGrid({
  id,
  href,
  name,
  price,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div className="lg:col-span-3">
      <div className="h-96 rounded-lg md:h-full">
        {/* <p className="font-bold text-gray-700">500+ results</p> */}
        <LongProductCard
          id={id}
          href={href}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          name={name}
          price={price}
        />

        <LongProductCard
          id={id}
          href={href}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          name={name}
          price={price}
        />
        <LongProductCard
          id={id}
          href={href}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          name={name}
          price={price}
        />
      </div>
    </div>
  );
}
