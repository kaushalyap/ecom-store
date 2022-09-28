import LongProductCard from './LongProductCard';
// import ShortProductCard from '../ShortProductCard/ShortProductCard';

export default function ProductGrid() {
  return (
    <div className="lg:col-span-3">
      <div className="h-96 rounded-lg md:h-full">
        {/* <p className="font-bold text-gray-700">500+ results</p> */}
        <LongProductCard
          id="1232"
          href="#"
          imageSrc=""
          imageAlt=""
          name="ASUS Laptop L510 Ultra Thin Laptop, 15.6” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, Windows 10 Home in S Mode"
          price={100000}
        />

        <LongProductCard
          id="1232"
          href="#"
          imageSrc=""
          imageAlt=""
          name="ASUS Laptop L510 Ultra Thin Laptop, 15.6” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, Windows 10 Home in S Mode"
          price={100000}
        />
        <LongProductCard
          id="1232"
          href="#"
          imageSrc=""
          imageAlt=""
          name="ASUS Laptop L510 Ultra Thin Laptop, 15.6” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, Windows 10 Home in S Mode"
          price={100000}
        />
      </div>
    </div>
  );
}
