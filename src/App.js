
import './App.css';
import Categories from './componets/Categories/Categories';
import Client from './componets/Client/Client';
import Courses from './componets/Courses/Courses';
import Faq from './componets/Faq/Faq';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Herosection from './componets/Herosection/Herosection';
import Main from './componets/Main/Main';
import Work from './componets/Work/Work';


function App() {
  return (
    <div className="App">
     <Header/>
     <Herosection/>
     <Main/>
     <Categories/>
     <Courses/>
     <Work/>
     <Faq/>
     <Client/>
     <Footer/>
    </div>
  );
}

export default App;
