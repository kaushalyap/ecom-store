import ShoppingItemCard from './ShoppingItemCard';

export default function ShoppingSummary() {
  return (
    <div className="hidden mt-20 md:block md:w-1/4 xl:w-1/2">
      <div className="md:hidden xl:block">
        <ShoppingItemCard
          title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
          price={5800}
          editable={true}
        />
        <ShoppingItemCard
          title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
          price={5800}
          editable={true}
        />
      </div>
      <h3 className="mb-4 font-headline font-medium tracking-wide xl:hidden">
        Summary
      </h3>
      <p className="flex justify-between tracking-wide text-gray-500 xl:mt-8 xl:text-lg">
        <span>Sub Total</span>
        <span>Rs. 11,200</span>
      </p>
      <p className="flex justify-between tracking-wide text-gray-500 xl:text-lg">
        <span>Delivery</span>
        <span>FREE</span>
      </p>
      <p className="flex justify-between mb-2 tracking-wide text-gray-500 xl:text-lg">
        <span>Discount</span>
        <span>0%</span>
      </p>
      <p className="flex justify-between font-bold tracking-wide xl:text-lg">
        <span>Total</span>
        <span>Rs. 11,200</span>
      </p>
    </div>
  );
}
