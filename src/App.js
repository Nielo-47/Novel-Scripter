import Home from "./pages/home/Home";
import Create from "./pages/create/create";
import Read from "./pages/read/read";
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/banner/Banner"
import Profile from "./pages/profile/profile";

import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(180deg, rgba(113, 88, 124, 0.994792) 0%, rgba(35, 44, 128, 0.98961) 52.95%, rgba(32, 32, 35, 0.994792) 100%);
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:idUsuario" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:idHistoria" element={<Read />} />
          <Route path="/read/:idHistoria/:idPagina" element={<Read />} />
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
