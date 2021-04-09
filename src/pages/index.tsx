import Head from "next/head";
import Link from "next/link";

import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiDevicePhone,
  TiMail,
} from "react-icons/ti";

import { Container } from "../components/Container";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Damien Sedgwick | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-4 shadow-2xl">
        <Container>
          <div className="social-links flex flex-row items-center">
            <a
              className="text-2xl md:text-3xl mx-2"
              href="https://github.com/damiensedgwick"
              target="_blank"
            >
              <TiSocialGithubCircular />
            </a>
            <a
              className="text-2xl md:text-3xl mx-2"
              href="https://www.linkedin.com/in/damiensedgwick/"
              target="_blank"
            >
              <TiSocialLinkedinCircular />
            </a>
          </div>
          <div className="logo">
            <Link href="/">
              <a className="text-3xl md:text-4xl">DKS</a>
            </Link>
          </div>
          <div className="contact-links flex flex-row items-center">
            <a
              className="text-2xl md:text-3xl mx-2"
              href="mailto:damiensedgwick@icloud.com"
            >
              <TiMail />
            </a>
            <a className="text-2xl md:text-3xl mx-2" href="tel:+447939273379">
              <TiDevicePhone />
            </a>
          </div>
        </Container>
      </header>
    </div>
  );
}
