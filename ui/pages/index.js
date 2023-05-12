import Head from 'next/head'
import Header from "@/components/Common/header";
import Webcam from '@/components/WebCame/WeCamePage';
import AboutWebcame from '@/components/WebCame/AboutWebcame';
import Footer from '@/components/Footer/Footer';

export default function indexPage(props) {
  return (
    <>
      <Head>
        <title>web came test </title>
        <meta name="description" content="web came test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Webcam/>
      <AboutWebcame/>

      <Footer/>

    </>
  )
}

