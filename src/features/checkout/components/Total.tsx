export default function Total() {
  return (
    <div>
      <p className="flex justify-between text-gray-600 xl:mb-1 xl:text-xl">
        <span>Sub Total</span>
        <span>Rs. 11,200</span>
      </p>

      <p className="flex justify-between text-gray-600 md:text-lg xl:mb-1 xl:text-xl">
        <span>Delivery</span>
        <span className="uppercase">Free</span>
      </p>
      <p className="flex justify-between text-gray-600 md:text-lg xl:mb-1 xl:text-xl">
        <span>Discount</span>
        <span className="uppercase">0%</span>
      </p>
      <p className="flex justify-between mb-4 text-lg md:text-xl xl:mb-6 xl:text-2xl">
        <span>Total</span>
        <span className="font-bold">Rs. 11,200</span>
      </p>
    </div>
  );
}
