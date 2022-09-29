import { ReactElement } from 'react';
import Common from './Common';

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
