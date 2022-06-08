import "./App.css";
import Home from './components/home'
import About from './components/aboutMe'
import Project from './components/projects'
import 'tw-elements'
import Footer from './components/footer'
import Contact from './components/contact'
function App() {
  return (
    <>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
