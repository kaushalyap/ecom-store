import MainLayout from '../components/Layouts/MainLayout';
import ProductCarousel from '../components/Carousel/ProductCarousel';

export default function Product() {
  return (
    <MainLayout>
      <main className="xl:flex xl:gap-6 xl:mt-20">
        <ProductCarousel />
        <div className="hidden xl:block xl:w-1/2">
          <img
            src="https://dummyimage.com/600x400"
            alt="placeholder"
            className="w-full rounded-xl"
          />
          <div className="flex gap-4 mt-4">
            <img
              src="https://dummyimage.com/70x70"
              alt="placeholder"
              className="rounded-xl"
            />
            <img
              src="https://dummyimage.com/70x70"
              alt="placeholder"
              className="rounded-xl"
            />
            <img
              src="https://dummyimage.com/70x70"
              alt="placeholder"
              className="rounded-xl"
            />
            <img
              src="https://dummyimage.com/70x70"
              alt="placeholder"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="xl:w-1/2">
          <h1 className="mb-1 font-headline text-lg md:mb-2 md:text-2xl lg:mt-2 lg:leading-snug xl:mt-2 xl:text-3xl 2xl:leading-normal">
            Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit
            Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit
            Gaming Mouse 3200 DPI for Windows PC Gamers (Black)
          </h1>
          <p className="mb-4 text-sm tracking-wider text-gray-500 uppercase md:text-base md:tracking-widest xl:text-lg">
            SAMSUNG
          </p>
          <div className="justify-between md:flex lg:items-baseline xl:block">
            <p className="mb-4 font-headline text-2xl tracking-wide md:mb-6 md:text-4xl md:font-medium lg:text-5xl xl:mb-8 xl:text-5xl">
              Rs. 6,800
            </p>
            <div>
              <button
                type="button"
                className="py-2 px-4 mr-4 tracking-wider rounded-2xl border border-brand md:py-3 md:text-xl lg:py-4 lg:px-8 xl:py-6 xl:px-12 xl:text-2xl xl:tracking-widest"
              >
                Add to Bag
              </button>
              <button
                type="submit"
                className="py-2 px-4 font-bold tracking-wider text-white bg-brand rounded-2xl md:py-3 md:text-xl lg:py-4 lg:px-8 lg:text-2xl xl:py-6 xl:px-12 xl:text-2xl xl:tracking-widest"
              >
                Buy It Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="mx-5 mb-20 border-t border-gray-300 xl:container xl:mx-auto">
        <h2 className="mt-4 mb-4 font-headline text-xl tracking-wider lg:mt-8 lg:mb-6 lg:text-2xl">
          Technical Specification
        </h2>
        <p className="tracking-wide text-gray-600 lg:text-xl xl:w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          magni repellat libero est sit numquam sed obcaecati minima
          reprehenderit harum, exercitationem veritatis animi enim non et
          repellendus? Inventore, ad doloremque.
        </p>
      </section>
    </MainLayout>
  );
}
