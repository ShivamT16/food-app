import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;