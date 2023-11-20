import Rating from "./Rating";
import PageTwo from "./PageTwo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <Router>
        <Rating/>
        <Routes>
          <Route exact path='/page-two' element={<PageTwo/>}/>
          <Route exact path='/' element={<Rating/>}/>
        </Routes>
        
      </Router>
      
    </body>
  );
}

export default App;
