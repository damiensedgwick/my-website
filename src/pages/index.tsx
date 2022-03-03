import type { NextPage } from 'next';
import { Layout } from 'components/Layout';
import { Grid } from 'components/Grid';

const Home: NextPage = () => (
  <Layout>
    <Grid>
      <p>Homepage</p>
    </Grid>
  </Layout>
);

export default Home;
