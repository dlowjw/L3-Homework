import './App.css'
import { Navbar } from './components/navbar';

function App() {

  const navLinks = [
    { link: "#", text: "Life & News" },
    { link: "#", text: "About" },
    { link: "#", text: "Store" },
    { link: "#", text: "Recipes" },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} />
      <div className="flex flex-row gap-1">

      </div>
    </>
  )
}

export default App
