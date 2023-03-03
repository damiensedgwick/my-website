import Head from 'next/head';
import { Container, Grid, Text, Card } from '@nextui-org/react';

export default function Home() {
  const MockItem = ({ text }: { text: string }) => {
    return (
      <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color='white' css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

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
        <Grid.Container gap={2} justify='center' alignItems='center'>
          <Grid xs={12} sm={5} direction='column' alignItems='center'>
            <Text
              h1
              size={45}
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              weight='bold'
            >
              Damien Sedgwick
            </Text>
            <Text
              size={45}
              css={{
                textGradient: '45deg, $purple600 -20%, $pink600 100%',
              }}
              weight='bold'
            >
              Fullstack Engineer
            </Text>
          </Grid>
          <Grid xs={12} sm={5}>
            <MockItem text='2 of 2' />
          </Grid>
        </Grid.Container>
      </main>
    </>
  );
}
