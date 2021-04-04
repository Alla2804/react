import './App.css';
import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";

function ContactUs() {
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="title" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    );
}
function AboutUs() {
    return (
        <div className="container my-5">
            <p>Дата создания 30.03.2021</p>
        </div>
    );
}
function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><PostList/>} />
                <Route path="/about" render={()=><AboutUs/>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
                <Route path="/post" render={()=><Post/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;