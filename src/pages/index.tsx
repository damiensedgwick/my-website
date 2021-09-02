import type { NextPage } from "next";

import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      metaTitle="Damien Sedgwick | Frontend Developer"
      metaDescription="Frontend Developer at Yozobi, inquisitive and passionate developer hacking on the world wide web. Skills include JavaScript, TypeScript, React, GraphQL, GoLang."
    >
      <div className="container grid max-w-6xl grid-cols-1 grid-rows-2 gap-2 px-6 pt-8 mx-auto md:grid-cols-6 md:grid-rows-2 md:px-0">
        <div className="col-span-4 md:col-start-2">
          <img
            className="w-40 mx-auto mb-4 rounded-full"
            src="/avatar.jpeg"
            alt="Damien Sedgwick Avatar"
          />
          <h1 className="mb-2 text-2xl text-center">Damien Sedgwick</h1>
          <p className="pb-2 text-3xl text-center md:text-4xl">
            Frontend Developer
          </p>
          <hr className="mb-2" />
        </div>
        <div className="col-span-4 row-start-2 md:col-start-2">
          <p className="mb-8">
            "Damien is one of the most adaptable developers I've had the
            pleasure to work with. He's seems to be on a constant search for
            knowledge which is one of the best traits a developer can have! On
            top of this he brings a great atmosphere to the team which makes him
            a great addition across industries, team sizes, and roles."
          </p>
        </div>
      </div>

      <div className="text-white bg-gray-800 shadow-2xl">
        <div className="container grid max-w-6xl grid-cols-1 grid-rows-1 gap-2 px-6 py-8 mx-auto md:grid-cols-6 md:px-0">
          <div className="col-span-4 md:col-start-2">
            <h2 className="mb-2 text-3xl">About</h2>
            <hr />
            <p className="mt-2">
              Compared to a lot of developers, I got into programming fairly
              late in life, I was 28. By the time I started learning how to code
              I had already been a car valeter, agency labourer, telesales
              agent, scaffolder, shop fitter and recycled waste operative.
            </p>
            <br />
            <p>
              This meant I had a lot of catching up to do and in my fast
              approaching 30 mind, not a lot of time to do it.
            </p>
            <br />
            <p>
              <a className="border-b-2 border-white" href="/about">
                Read more about my journey here!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="pb-20 shadow-2xl md:pb-0">
        <div className="container grid max-w-6xl grid-cols-1 grid-rows-1 gap-2 px-6 py-8 mx-auto md:grid-cols-6 md:px-0">
          <div className="col-span-4 md:col-start-2">
            <h2 className="mb-2 text-3xl">Experience</h2>
            <hr />
            <p className="mt-2">
              I consider myself quite lucky as I have had the privedge of
              working on some really cool projects and experienced working with
              some really big brands, I've worked with companies that operate on
              a global scale and I've worked with companies that specialise in
              niche areas, below is some of those experiences:
            </p>
            <br />
            <p className="text-center">... coming soon</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
