import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Text, Card } from '@nextui-org/react';

export default function Home({ articles }: { articles: any }) {
  return (
    <>
      <Head>
        <title>Damien Sedgwick | Software Developer</title>
        <meta
          name='description'
          content='One day, I will have written, something really meaningful, and it will go here.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Grid.Container
          gap={2}
          justify='center'
          alignItems='center'
          css={{ height: '100%' }}
        >
          <Grid xs={12} sm={6} direction='column'>
            <Text
              h1
              weight='bold'
              css={{
                fontSize: '2rem',
                margin: '0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textAlign: 'center',

                '@media (min-width: 768px)': {
                  fontSize: '2.5rem',
                },

                '@media (min-width: 960px)': {
                  textAlign: 'left',
                },

                '@media (min-width: 1200px)': {
                  fontSize: '3.5rem',
                },
              }}
            >
              Damien Sedgwick
            </Text>
            <Text
              css={{
                fontSize: '2rem',
                color: '#ECEDEE',
                fontFamily: 'Arial',
                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': '#10253E',
                letterSpacing: '0.25rem',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                textAlign: 'center',

                '@media (min-width: 768px)': {
                  fontSize: '2.5rem',
                },

                '@media (min-width: 960px)': {
                  textAlign: 'left',
                },

                '@media (min-width: 1200px)': {
                  fontSize: '3.5rem',
                },
              }}
              weight='bold'
            >
              Fullstack Engineer
            </Text>
          </Grid>
          <Grid xs={12} sm={5}>
            <Container justify='center' alignItems='center'>
              <Text
                h2
                weight='bold'
                css={{ fontSize: '2rem', textAlign: 'center' }}
              >
                Recent Posts
              </Text>
              {articles.map((article: any) => (
                <Link href={article.url} target='_blank' key={article.id}>
                  <Card
                    css={{
                      margin: '1rem auto',
                      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
                      width: '262px',
                      height: '138px',

                      '&:hover': {
                        transform: 'scale(1.05)',
                      },

                      '@media (min-width: 960px)': {
                        width: '300px',
                        height: '160px',
                      },
                    }}
                  >
                    <Image
                      src={article.social_image}
                      alt='Block post social image'
                      fill
                    />
                  </Card>
                </Link>
              ))}
            </Container>
          </Grid>
        </Grid.Container>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick&per_page=3'
  );

  const articles = await res.json();

  return {
    props: { articles },
  };
}
