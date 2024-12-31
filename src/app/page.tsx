import CompanyList from "@/components/companyList/page";
import Dashboard from "@/components/Dashboard/page";
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
