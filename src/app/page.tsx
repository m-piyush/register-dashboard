import CompanyList from "@/components/companyList/page";
import Image from "next/image";
import Header from "../components/Header/page";
import Dashboard from "@/components/Dashboard/page";
import Top from "@/components/Top/page";
import Service from "@/components/Service/page";
import About from "@/components/About/page";
import WhyChooserRegister from "@/components/WhyChooseRegister/page";
import Video from "@/components/Video/page";
import Client from "@/components/Client/page";
import Blogs from "@/components/Blogs/Page";
import CarouselCard from "@/components/CarouselCard/Page";
import ContactPage from "@/components/ContactPage/Page";

export default function Home() {
  return (
    <>
      <Top />
      {/* <Header /> */}
      <Dashboard />
      <CompanyList />
      <Service />
      <About />
      <WhyChooserRegister />
      <Video />
      <Client />
      <Blogs />
      <CarouselCard />
      <ContactPage />

    </>
  );
}
