import React ,{useEffect} from 'react';
import Router from './Router';
import axios from "axios"
// import css file
import './assets/css/global.css';
import 'animate.css';

function App() {
    useEffect(() => {
        axios.get("https://morning-dawn-50353.herokuapp.com/hello")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
    return (
        <div className="app">

            <Router/>
        </div>
    );
}

export default App;
