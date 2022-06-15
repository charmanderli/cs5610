import "./App.css";
import PostList from "./components/PostList";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Nav />

      <body>
        <div className="Banner"></div>
        <SearchBar />
        <div>
          <Header title={"Explore"} />
        </div>

        <PostList />
      </body>
    </div>
  );
}

export default App;
