import Faqs from '../constants/Faqs';
import DisclosureItem from './DisclosureItem';

export default function FaqList() {
  return (
    <div className="p-2 max-w-xl bg-blue-50 rounded-2xl md:p-4 md:mx-auto lg:max-w-2xl">
      {Faqs.map((item) => (
        <DisclosureItem key={item.key} question={item.question}>
          {item.answer}
        </DisclosureItem>
      ))}
    </div>
  );
}
