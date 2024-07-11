import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

//children is like parameter that Layout must always have in this say that it must to have something inside the tag
const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      {showHero && <Hero></Hero>}
      {/* <Hero></Hero> */}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
