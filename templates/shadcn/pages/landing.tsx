import dynamic from 'next/dynamic'
import "../assets/css/style.css";

import Cta from "../components/cta";
import Faq from "../components/faq";
import Feature from "../components/feature";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import { Page } from "@/types/landing";
import Section from "../components/section";
import Testimonial from "../components/testimonial";
import Usercase from "../components/usercase";

const Video = dynamic(() => import("../components/video"), {
  ssr: false
});

export default function ({ page }: { page: Page }) {
  return (
    <>
      {page.header && <Header header={page.header} />}
      {page.hero && <Hero hero={page.hero} />}
      {page.video && <Video video={page.video} />}
      {page.usercase && <Usercase section={page.usercase} />}
      {page.section && <Section section={page.section} />}
      {page.feature && <Feature section={page.feature} />}
      {/* <Pricing /> */}
      {page.testimonial && <Testimonial section={page.testimonial} />}
      {page.faq && <Faq section={page.faq} />}
      {/* {page.cta && <Cta section={page.cta} />} */}
      {page.footer && <Footer footer={page.footer} />}
    </>
  );
}
