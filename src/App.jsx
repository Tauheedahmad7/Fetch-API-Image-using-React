import { Route, Routes } from 'react-router-dom';
import Gallery from './component/Gallery';
import About from './component/About';


const App = () => {
  return (
      <div>
        
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
};

export default App;
