import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/*// NavLink is link, to={create url}*/}
            <NavLink to={'/'}>main</NavLink> --
            <NavLink to={'/login'}>login</NavLink> --
            <NavLink to={'/profile'}>profile</NavLink>


            {/*читает путь и при совпадении path and url, отрисовывает element (может быть и компонента) */}
            <Routes>
                <Route path={'/'} element={<div>main</div>}></Route>
                <Route path={'/login'} element={<div>login</div>}></Route>
                <Route path={'/profile'} element={<div>profile</div>}></Route>
            </Routes>
        </div>
    );
}

export default App;
