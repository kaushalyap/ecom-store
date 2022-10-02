import filterIcon from '../images/icons/filter-outlined.svg';

type Props = {
  setMobileFilter: (open: boolean) => void;
};

export default function FilterButton({ setMobileFilter }: Props) {
  return (
    <button
      type="button"
      className="p-3 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
      onClick={() => setMobileFilter(true)}
    >
      <span className="sr-only">Filters</span>
      <img
        src={filterIcon}
        alt="filter"
        className="w-5 h-5"
        aria-hidden="true"
      />
    </button>
  );
}
