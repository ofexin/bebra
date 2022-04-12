import logo from './logo.svg';
import './App.css';
import Header from "./copmonent/header/header";
import Navbar from "./copmonent/navbar/navbar";
import Profile from "./copmonent/profile/profile";
import Dialogs from "./copmonent/dialogs/Dialogs";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./copmonent/dialogs/DialogsContainer";


function App (props) {
    return (<div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element = {<Profile
                        store={props.store}/>}/>
                    <Route path="/dialogs" element = {<DialogsContainer
                        store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;