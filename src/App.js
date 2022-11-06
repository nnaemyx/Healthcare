import Home from "./pages/Home";
import Article from "./pages/Article";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import ArticleScreen from "./components/ArticleScreen";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/article/:id" element={<ArticleScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
