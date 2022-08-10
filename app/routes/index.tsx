import { LinksFunction, MetaFunction } from '@remix-run/node';
import { Header } from '~/components/header';

import stylesUrl from '~/styles/index.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  title: 'Damien Sedgwick | Software Developer',
  description:
    'One day, I will have written, something really meaningful, and it will go here.',
});

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
