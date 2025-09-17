import './App.css'
import { Navbar } from './components/navbar';
import { LandingMain } from './components/landingMain';

function App() {

  const navLinks = [
    { link: "#", text: "Life & News" },
    { link: "#", text: "About" },
    { link: "#", text: "Store" },
    { link: "#", text: "Recipes" },
  ];

  return (
    <div>
      <Navbar navLinks={navLinks} />
      <LandingMain />
    </div>
  )
}

export default App
