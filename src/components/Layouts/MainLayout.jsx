import Common from './Common';

export default function Layout({ children }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {process.env.GATSBY_MODE === 'development' ? (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="debug-screens">
          <Common>{children}</Common>
        </div>
      ) : (
        <Common>{children}</Common>
      )}
    </>
  );
}
