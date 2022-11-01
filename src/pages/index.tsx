import * as React from "react";
import Image from 'next/image'
import Link from "components/Link";
import Grid from '@mui/material/Unstable_Grid2';
import {Container, List, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

interface HomeProps {
  articles: Article[];
}

interface Article {
  id: string;
  url: string;
  social_image: string;
}

export default function Home({articles}: HomeProps) {
  return (
    <Container maxWidth="xl" sx={{height: "100vh"}}>
      <Grid container spacing={2} height="100%">
        <Grid xs={12} md={6} sx={{alignSelf: "center"}}>
          <Typography variant="h4" align="center" mb="0.5rem" sx={{fontWeight: "bold"}}>Damien Sedgwick</Typography>
          <Typography variant="h1" align="center" mb="0.5rem" sx={{
            webkitTextStrokeWidth: "2px",
            webkitTextStrokeColor: "red",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            fontWeight: "bold"
          }}>Frontend
            Engineer</Typography>
          <List
            sx={{display: "flex", align: "center", justifyContent: "center"}}>
            <Link href="https://www.linkedin.com/in/damiensedgwick/"
              underline="none" sx={{mx: 1}}><LinkedInIcon fontSize="large"/></Link>
            <Link href="https://www.github.com/damiensedgwick/"
                  underline="none"
              sx={{mx: 1}}><GitHubIcon fontSize="large"/></Link>
            <Link href="https://www.twitter.com/damiensedgwick/"
                  underline="none"
              sx={{mx: 1}}><TwitterIcon fontSize="large"/></Link>
          </List>
        </Grid>

        <Grid xs={12} md={6} sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography mb="0.5rem">Recent Posts</Typography>
          {articles.map((article) => (
            <Link href={article.url}
                  sx={{my: 1, boxShadow: 3, borderRadius: '8px'}}>
              <Image
                src={article.social_image} alt="Article social image"
                width={300} height={150}
              />
            </Link>
          ))}
        </Grid>

        <Grid xs={12} sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div>Showcase</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick&per_page=3'
  )

  const articles = await response.json()

  return {
    props: {
      articles,
    }
  }
}