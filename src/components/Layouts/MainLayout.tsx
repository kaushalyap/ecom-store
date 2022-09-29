import React from 'react';
import { ReactElement } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

type Props = {
  children: ReactElement;
};

export default function MainLayout({ children }: Props) {
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

function Common({ children }: Props) {
  return (
    <React.StrictMode>
      <NavBar />
      <div className="mx-5 mb-20 md:mb-28 xl:container xl:mx-auto">
        {children}
      </div>
      <Footer />
    </React.StrictMode>
  );
}
