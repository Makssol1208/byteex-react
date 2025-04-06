import Benefits from "./components/Benefits/Benefits";
import Connection from "./components/Connection/Connection";
import Faq from "./components/Faq/Faq";
import Final from "./components/Final/Final";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Order from "./components/Order/Order";
import Reviews from "./components/Reviews/Reviews";
import TopInfo from "./components/TopInfo/TopInfo";

function App() {
  return (
    <>
      <TopInfo />
      <Hero />
      <Benefits />
      <Connection />
      <Order />
      <Reviews />
      <Faq />
      <Info />
      <Final />
    </>
  );
}

export default App;
