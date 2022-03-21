import { useState, useCallback } from "react";
import "./App.css";
import { Bookcase } from "./Bookcase";

function App() {
  const [dark, setDark] = useState(false);

  const getBooks = useCallback((number) => {
    console.log("Number of books?", number);
    return [{ name: "The Game" }];
  }, []);

  const theme = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };
  return (
    <div className="App">
      <button onClick={() => setDark((previous) => !previous)}>
        CHANGE THEME
      </button>
      <div style={theme}>THEME</div>
      <Bookcase getBooks={getBooks}></Bookcase>
    </div>
  );
}

export default App;
