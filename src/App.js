import React from 'react'
import './App.css';
import TabsComponent from './TabsComponent';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import SingleMovie from './SingleMovie'


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route element={<FirstPage/>} path="/firstpage"></Route>
        <Route element={<SecondPage/>} path="/secondpage"></Route>
        <Route element={<TabsComponent/>} path="/tabs"></Route>
        <Route element={<SingleMovie/>} path="/movie/:id"></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
