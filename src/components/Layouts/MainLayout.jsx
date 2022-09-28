import Common from './Common';

export default function MainLayout({ children }) {
  return (
    <>
      <main>
        {process.env.GATSBY_MODE === 'development' ? (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div className="debug-screens">
            <Common>{children}</Common>
          </div>
        ) : (
          <Common>{children}</Common>
        )}
      </main>
    </>
  );
}
