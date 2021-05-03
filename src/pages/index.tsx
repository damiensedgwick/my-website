import Image from "next/image";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout
      pageTitle="Damien Sedgwick | Frontend Developer"
      pageDescription="Frontend Developer at Yozobi. Inquisitive and passionate React developer hacking on the world wide web!"
    >
      <section className="masthead px-6 md:px-0">
        <div
          className="container mx-auto flex flex-row justify-center items-center"
          style={{ height: "calc(80vh)" }}
        >
          <div className="container mx-auto text-center md:w-3/4">
            <Image
              src="/avatar.jpg"
              alt="Picture of Damien Sedgwick"
              width={175}
              height={175}
              className="rounded-full"
            />
            <h1 className="text-lg md:text-2xl md:mb-2">Damien Sedgwick</h1>
            <p className="text-2xl md:text-4xl pb-2">Frontend Developer</p>
            <hr className="mb-2" />
            <p className="text-left">
              <i>
                "Damien is one of the most adaptable developers I've had the
                pleasure to work with. He's seems to be on a constant search for
                knowledge which is one of the best traits a developer can have!
                On top of this he brings a great atmosphere to the team which
                makes him a great addition across industries, team sizes, and
                roles."
              </i>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
