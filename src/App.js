// import "./App.css";
import "./assets/scss/style.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Issues from "./components/Issues";
import Home from "./components/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGitlab,
  faChrome,
  faDigitalOcean,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faMessage,
  faHouse,
  faUpload,
  faUsers,
  faTrash,
  faFilter,
  faUserPlus,
  faWindowMaximize,
  faPlus,
  faLock,
  faLockOpen,
  faCodeCompare,
  faCodeCommit,
  faXmark,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faCodeFork,
  faFolder,
  faChevronDown,
  faChevronUp,
  faPencil,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faBell,
  faMessage,
  faHouse,
  faUpload,
  faUsers,
  faTrash,
  faFilter,
  faUserPlus,
  faWindowMaximize,
  faPlus,
  faLock,
  faLockOpen,
  faChrome,
  faGitlab,
  faDigitalOcean,
  faCodeCompare,
  faCodeCommit,
  faXmark,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faCodeFork,
  faFolder,
  faChevronDown,
  faChevronUp,
  faPencil,
  faTriangleExclamation
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} 
          />
          <Route exact path="/issues" element={<Issues/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
