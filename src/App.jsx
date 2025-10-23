import { BrowserRouter } from "react-router-dom";

import UserStorage from "./UserStorage";

import "./App.css";

import Page from "./page/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Page />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
