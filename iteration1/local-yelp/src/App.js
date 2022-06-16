import "./App.css";
import PostList from "./components/PostList";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Route, Routes, Link } from "react-router-dom";
import New from "./components/New";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <Nav city={"Halle"} />
      {/* improvement? */}
      <div className="Button">
        <Link to="/posts/new">Add post</Link>
      </div>
      <div className="body">
        <div className="Banner">
          <SearchBar />
        </div>

        <div>
          <Header title={"Explore"} />
        </div>

        <PostList />
      </div>
      <Routes>
        <Route path="*" element={<p>Nothing there</p>}></Route>
        <Route path="/posts/new" element={<New />}></Route>
        <Route path="/posts/:_id" element={<PostDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
