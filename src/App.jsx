import React from "react";
import { createBrowserHistory } from "history";
import BannerContainer from "./components/Banner/BannerOfList";
import ListOfCharacters from "./components/List/ListOfCharacters";

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <React.Fragment>
      <BannerContainer />
      <ListOfCharacters />
    </React.Fragment>
    
  );
}

export default App;
