import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

const CreateLink = dynamic(() => import("../components/CreateLink"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Onix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen mx-auto text-gray-100 bg-gray-900">
        <div className="md:w-1/2">
          <Suspense>
            <h1 className="text-6xl font-bold text-center uppercase">Onix</h1>
            <p className="pt-1 text-center capitalize text-md">
              a fast link shortener
            </p>
            <CreateLink />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Home;
