import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Navbar} from './components/Navbar'
import {Profile} from "./components/Profile";
import {MyPosts} from "./components/MyPosts";

const App = () => {
    return (
        <div>

        <Header/>
             <Navbar/>
            <Profile/>
            <MyPosts/>
</div>
)
}


export default App;
