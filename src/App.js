import './App.css';
import Components from './Components';
import container from './Container';

const { ClubMembers, EventsWorkshops, Feature, Footer, AboutUs, Navbar } = Components
const {Carousel, ScrollToTop} = container;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <AboutUs/>
      <Feature/>
      <ScrollToTop/>
      <EventsWorkshops/>
      <ClubMembers/>
      <Footer/>
    </div>
  );
}

export default App;
