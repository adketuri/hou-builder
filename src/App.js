import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from "./components/Stats/Stats";
import Equipment from "./components/Equipment/Equipment"
import {Container} from "react-bootstrap";

function App() {
  return (<Container>
    <Stats/>
    <Equipment/>
  </Container>);
}

export default App;
