import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import MeetChef from "../components/MeetChef";
import ChefQuote from "../components/ChefQuote";
import LocationInfo from "../components/LocationInfo";
function Home() {
  return (
    <div>
      <Hero />
      <LocationInfo />
      <Specialities />
      <MeetChef />
      <ChefQuote />
    </div>
  );
}

export default Home;
