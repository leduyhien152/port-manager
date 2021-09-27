import Head from 'next/head';
import { Gradient } from '../components/Gradient';
import { Timeline } from '../components/Timeline';
import { ProductIntro } from '../components/ProductIntro';
import { Desktop } from '../components/Desktop';
import { Footer } from '../components/Footer';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="text-lg antialiased">
      <Head>
        <title>Port Manager for Mac — Manage ports from your menu bar</title>
        <meta
          name="description"
          content="Find, open and kill ports in a couple of clicks. Works with Node, Python, Ruby, PHP, HTTP and pretty much any process listening on a TCP port."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Gradient />
        <Timeline />
        <ProductIntro />
        <Desktop />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
