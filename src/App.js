import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/parent-component/parent.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h4 className="app-title">React.memo()</h4>
            </header>
            <main className="app-main">
                <ParentComponent />
            </main>
        </div>
    );
}

export default App;
