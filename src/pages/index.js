// pages/index.js
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import Feedback from '../components/Feedback';
import { AuthContextProvider } from '../Context/AuthContext';

const HomePage = () => {
  return (
    <div>
      <Navbar />
       <MainSection />
      <Feedback />
    </div>
  );
};

export default HomePage;
