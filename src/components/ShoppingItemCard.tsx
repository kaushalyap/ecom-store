import { Link } from 'gatsby';
import trimText from '../utils/Utils';
import ListBox from './ListBox';

const itemCount = [
  {
    id: 1,
    count: '1',
  },
  {
    id: 2,
    count: '2',
  },
  {
    id: 3,
    count: '3',
  },
];

type Props = {
  title: string;
  price: number;
  editable: boolean;
};

export default function ShoppingItemCard({ title, price, editable }: Props) {
  return (
    <div className="flex gap-4 mb-4 bg-green-50 rounded-lg shadow-lg md:mb-6 md:h-44">
      <img
        src="https://dummyimage.com/200x200"
        className="w-2/5 rounded-l-lg md:w-1/4"
        alt="placeholder"
      />
      <div className="py-2 pr-2 w-3/5 md:py-4 md:pr-4 md:w-3/4">
        <Link to="/">
          <h3 className="mb-2 font-headline md:text-xl">{trimText(title)}</h3>
        </Link>
        <div className="flex justify-between items-end mb-2">
          {editable ? (
            <ListBox options={itemCount} />
          ) : (
            <span className="tracking-wide text-gray-500">Qty 1</span>
          )}

          <span className=" tracking-wide md:text-xl">{`Rs. ${price}`}</span>
        </div>
        {editable ? (
          <div className="flex justify-end text-gray-400">
            <button
              type="button"
              className="text-sm tracking-wide md:text-base"
            >
              Remove
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
