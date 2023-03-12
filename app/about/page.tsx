import { AppBar } from '../components/AppBar';

export default function About() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      <img
        src='https://i.giphy.com/media/6uGhT1O4sxpi8/giphy.webp'
        height={500}
        width={1000}
        alt=''
        style={{ display: 'block', margin: 'auto' }}
      />
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Coming Soon</h2>
      <AppBar />
    </main>
  );
}
