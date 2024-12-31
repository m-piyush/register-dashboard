import CompanyList from "@/components/companyList/page";
import 'antd/dist/reset.css';
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
