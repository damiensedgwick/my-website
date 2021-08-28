import type { NextPage } from "next";

import { Layout } from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout
      metaTitle="About | Damien Sedgwick | Frontend Developer"
      metaDescription="Frontend Developer at Yozobi, inquisitive and passionate developer hacking on the world wide web. Skills include JavaScript, TypeScript, React, GraphQL, GoLang."
    >
      <div className="flex flex-row items-center justify-center w-screen h-screen">
        Under construction...
      </div>
    </Layout>
  );
};

export default About;
