import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./component/Navbarr.jsx";
import PostNavbar from "./component/PostNavbar.jsx";
import HeroSection from "./component/HeroSection.jsx";
import Cards from "./component/Cards.jsx";
import FormSection from "./component/FormSection.jsx";
import Footter from "./component/Footter.jsx";

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <PostNavbar/>
      <HeroSection/>
      <Cards/>
      <FormSection/>
      <Footter/>
    </div>
  );
}

export default App;
