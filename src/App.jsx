import './app.css';
import Navbar from './components/navbar/Navbar';
import Header from './section/header/Header';
import About from './section/about/About';
import Services from './section/services/Services';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;
