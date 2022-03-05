import Head from 'next/head';
import { styled } from '../../stitches.config';

// const Text = styled('div', {
//   '@sm': {
//     color: 'blue',
//   },
//
//   '@lg': {
//     color: 'orange',
//   },
// });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>

      {/*<Text>Hello...</Text>*/}
    </div>
  );
}
