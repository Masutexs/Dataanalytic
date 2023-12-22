import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  Analytics,
  Cards,
  Footer,
  Hero,
  Navbar,
  Newsletter,
} from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      <SpeedInsights/>
    </div>
  );
}

export default App;
