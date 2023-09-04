import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About'
import Projects from './components/projects/Projects'
import ContactMe from './components/contact/ContactMe'
import Foooter from './components/footer/Foooter'


const App = () => {
  return (
    <>
      <div className='master-container'>
        <div className='under-const'>🦺Portfolio Under Construction🦺</div>
        <Header />
        <Navigation />
        <About />
        <Projects />
        <ContactMe />
        <Foooter />
      </div>
    </>
  );
}

export default App;
