import { type NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const dances = trpc.dances.getAll.useQuery();

  if (!dances.data) {
    return <div> Data is loading</div>;
  }

  return (
    <>
      <Head>
        <title>Dance Log </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="to-white-900  m-0  h-screen bg-gradient-to-b from-blue-900">
        <div className="mx-auto mt-9 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex space-x-8">
            {dances.data.map((dance) => (
              <Card key={dance.id} {...dance} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
