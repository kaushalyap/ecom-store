import ShoppingItemCard from './ShoppingItemCard';

export default function ShoppingItemList() {
  return (
    <div className="mb-8 xl:mb-0 xl:w-2/3">
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
  );
}
