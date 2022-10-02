import ShoppingItemCard from './ShoppingItemCard';

export default function Cart() {
  return (
    <div className="mb-6">
      <h2 className="mb-2 font-headline text-lg tracking-wide md:text-xl">
        Your Cart was
      </h2>

      <ShoppingItemCard
        title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
        price={5800}
        editable={false}
      />
      <ShoppingItemCard
        title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
        price={5800}
        editable={false}
      />

      <div className="p-4 bg-blue-100 rounded-xl shadow-lg">
        <h3 className="mb-2 font-headline tracking-wide md:text-lg">Summary</h3>

        <p className=" flex justify-between tracking-wide text-gray-500 md:text-lg">
          <span>Sub Total</span>
          <span>Rs. 11,200</span>
        </p>
        <p className="flex justify-between tracking-wide text-gray-500 md:text-lg">
          <span>Delivery</span>
          <span>FREE</span>
        </p>
        <p className="flex justify-between mb-2 tracking-wide text-gray-500 md:text-lg">
          <span>Discount</span>
          <span>0%</span>
        </p>
        <p className="flex justify-between font-bold tracking-wide md:text-lg xl:tracking-wider">
          <span>Total</span>
          <span>Rs. 11,200</span>
        </p>
      </div>
    </div>
  );
}
