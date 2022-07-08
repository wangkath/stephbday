import './App.css';
import IntroPage from './components/IntroPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageTwo from './components/PageTwo';
import PageThree from "./components/PageThree"
import PageFour from "./components/PageFour"
import PageFive from "./components/PageFive"
import PageSix from "./components/PageSix"
import PageSeven from "./components/PageSeven"
import PageEight from "./components/PageEight"
import PageNine from "./components/PageNine"
import PageTen from './components/PageTen';
import FinalPage from './components/FinalPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <IntroPage />
            }
          />
          <Route
            path="/page-two"
            element={
              <PageTwo />
            }
          />
          <Route
            path="/page-three"
            element={
              <PageThree />
            }
          />
          <Route
            path="/page-four"
            element={
              <PageFour />
            }
          />
          <Route
            path="/page-five"
            element={
              <PageFive />
            }
          />
          <Route
            path="/page-six"
            element={
              <PageSix />
            }
          />
          <Route
            path="/page-seven"
            element={
              <PageSeven />
            }
          />
          <Route
            path="/page-eight"
            element={
              <PageEight />
            }
          />
          <Route
            path="/page-nine"
            element={
              <PageNine />
            }
          />
          <Route
            path="/page-ten"
            element={
              <PageTen />
            }
          />
          <Route
            path="/page-final"
            element={
              <FinalPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
