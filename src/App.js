import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";

class App extends Component {
    render() {
        return (
            <main>
                <Navbar/>
                <Section />
            </main>
        );
    }
}

export default App;
