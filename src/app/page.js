import { Footer } from "@/components/Footer/Footer";
import Banner from "@/components/Hero/Banner";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow w-full justify-between flex-col">
        <Banner />
        <Footer />
      </div>
    </>
  );
}
