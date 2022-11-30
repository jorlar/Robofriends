import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import SearchBox from "./searchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
