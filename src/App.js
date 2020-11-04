import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/common/footer";
import HeroSlider from "./components/common/Slider";

function App() {
  return (
    <Router>
      <HeroSlider />
      <Footer />
    </Router>
  );
}

export default App;
