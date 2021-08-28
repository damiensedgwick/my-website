import type { NextPage } from "next";

import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      metaTitle="Damien Sedgwick | Frontend Developer"
      metaDescription="Frontend Developer at Yozobi, inquisitive and passionate developer hacking on the world wide web. Skills include JavaScript, TypeScript, React, GraphQL, GoLang."
    >
      <div className="container grid grid-cols-1 grid-rows-2 gap-2 px-6 pt-8 mx-auto md:grid-cols-6 md:grid-rows-2 md:px-0">
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
          <p className="mb-8 text-lg">
            "Damien is one of the most adaptable developers I've had the
            pleasure to work with. He's seems to be on a constant search for
            knowledge which is one of the best traits a developer can have! On
            top of this he brings a great atmosphere to the team which makes him
            a great addition across industries, team sizes, and roles."
          </p>
        </div>
      </div>

      <div className="text-white bg-gray-800 shadow-2xl">
        <div className="container grid grid-cols-1 grid-rows-1 gap-2 px-6 py-8 mx-auto md:grid-cols-6 md:px-0">
          <div className="col-span-4 md:col-start-2">
            <h2 className="mb-2 text-3xl">About</h2>
            <hr />
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              necessitatibus expedita ipsum amet id fuga optio accusantium
              eligendi vitae voluptates vel saepe ea, adipisci unde fugit! Non,
              ullam incidunt. Iusto quisquam pariatur odit aliquid assumenda
              numquam ullam iure consequatur.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-2xl">
        <div className="container grid grid-cols-1 grid-rows-1 gap-2 px-6 py-8 mx-auto md:grid-cols-6 md:px-0">
          <div className="col-span-4 md:col-start-2">
            <h2 className="mb-2 text-3xl">Experience</h2>
            <hr />
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              necessitatibus expedita ipsum amet id fuga optio accusantium
              eligendi vitae voluptates vel saepe ea, adipisci unde fugit! Non,
              ullam incidunt. Iusto quisquam pariatur odit aliquid assumenda
              numquam ullam iure consequatur.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
