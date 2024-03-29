import { Link } from 'gatsby';
import { Dispatch, SetStateAction } from 'react';
import MenuButton from './MenuButton';

type Props = {
  menuClickHandler: Dispatch<SetStateAction<boolean>>;
};

export default function SubNav({ menuClickHandler }: Props) {
  return (
    <div className="hidden justify-end mx-2 h-10 tracking-wider md:flex md:text-lg 2xl:justify-between 2xl:mx-4 2xl:h-12">
      <MenuButton
        classes="hidden 2xl:flex 2xl:items-end"
        label="Menu"
        clickHandler={menuClickHandler}
      />
      <div
        id="sub-nav-right"
        className="flex items-center text-base text-gray-600 2xl:mr-2"
      >
        <Link
          to="/about#why-us"
          className="py-2 px-2"
          activeClassName=" active-link"
        >
          Why Us?
        </Link>
        <Link to="/about" className="py-2 px-2" activeClassName=" active-link">
          About
        </Link>
        <Link
          to="/contact"
          className="py-2 px-2"
          activeClassName=" active-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
