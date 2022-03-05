import Head from 'next/head';
import { styled, theme } from '../../stitches.config';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  background: theme.colors.slate100,
});

// const Text = styled('p', {
//   variants: {
//     weight: {
//       300: {
//         fontWeight: '300',
//       },
//       400: {
//         fontWeight: '400',
//       },
//       500: {
//         fontWeight: '500',
//       },
//       700: {
//         fontWeight: '700',
//       },
//     },
//   },
// });

export default function Home() {
  return (
    <Homepage>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>

      {/*<Text weight={'300'}>Hello...</Text>*/}
      {/*<Text weight={'400'}>Hello...</Text>*/}
      {/*<Text weight={'500'}>Hello...</Text>*/}
      {/*<Text weight={'700'}>Hello...</Text>*/}
    </Homepage>
  );
}
