import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from "./components/Stats/Stats";
import Equipment from "./components/Equipment/Equipment"
import {Container} from "react-bootstrap";
import SecondaryStats from "./components/SecondaryStats/SecondaryStats";
import Skills from "./components/Skills/Skills";

function App() {
  return (<Container>
    <Stats/>
    <SecondaryStats/>
    <Equipment/>
    <Skills/>
  </Container>);
}

export default App;
