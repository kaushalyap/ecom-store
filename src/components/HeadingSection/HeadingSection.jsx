export default function HeadingSection({ children, extraClasses = '' }) {
  return (
    <h2
      className={`mt-8 mb-2 font-headline font-medium md:text-lg xl:text-xl ${extraClasses}`}
    >
      {children}
    </h2>
  );
}
