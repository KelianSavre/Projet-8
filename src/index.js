import React from 'react';
import {createRoot} from 'react-dom/client'
import './stylesheets/sass/layouts/content_layout.css';


import NavRouter from './components/Router';
import Footer from './components/Footer';

const container = document.getElementById('root')
const footer = document.getElementById('footerId')

createRoot(container).render(<NavRouter/>)

createRoot(footer).render(<Footer/>)



