import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Chart,
  Stats,
  Team,
  NewsletterForm,
  About,
  Navbar,
  Exchange,
  AI,
  Governance,
  Footer,
  Hero,
  Clients,
  Tokenomics,
  Build,
  ScrollToTopButton,
  Timeline,
  Starship,
  Autonomous,
  DexFeatures,
  Playswap
} from './components';

import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TermsOfUse from './pages/TermsOfUse';

import { StarsCanvas } from './components/canvas';

export const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <div className='w-full  bg-[#03011c] overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} mr-10 `}>
              <Navbar />
            </div>
          </div>
        </div>

          <div className={`bg-secondary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/terms-of-use' element={<TermsOfUse />} />
              </Routes>
            </div>
          </div>

          <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>

          <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='relative z-0'>
          <StarsCanvas />
        <Hero />
        <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className='relative z-0'>
          <StarsCanvas />
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Clients />
            <Playswap />
            <About />
            <Starship />
            <Exchange />
            <Autonomous/>
            <DexFeatures />
            <AI />
            <Governance />
            <Tokenomics />
            <Timeline />
            <Team />
            <Build />
            <NewsletterForm />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
