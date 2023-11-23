import Rating from "./Rating";
import PageTwo from "./PageTwo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0)
  return (
    <body>
      <Router>
        {/* <Rating/> */}
        <Routes>
          <Route exact path='/' element={<Rating setRating={setRating}/>}/>
          <Route exact path='/page-two' element={<PageTwo rating={rating}/>}/>
          
        </Routes>
        
      </Router>
      
    </body>
  );
}

export default App;
