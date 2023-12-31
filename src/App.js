
import './App.css';

import { Footer, Header, Posibility, Features, WhatGPT3, Blog } from './containers';
import {CTA, Brand, Navbar} from "./components"

const App=() =>{
  return (
  <div className='App'>
    <div className='gradient__bg'>
    <Navbar />
    <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Posibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
