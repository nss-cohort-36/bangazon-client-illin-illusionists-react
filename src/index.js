import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bangazon from '../src/components/Bangazon';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Bangazon />
    </Router>, 
    document.getElementById('root'));

